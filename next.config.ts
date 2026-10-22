import type { NextConfig } from "next";

const deploymentSequence =
	process.env.GITHUB_RUN_NUMBER ??
	process.env.CI_PIPELINE_IID ??
	new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);

const commitSuffix = (
	process.env.GITHUB_SHA ?? process.env.VERCEL_GIT_COMMIT_SHA
)?.slice(0, 7);

const deploymentVersion = commitSuffix
	? `${deploymentSequence}-${commitSuffix}`
	: deploymentSequence;

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/, so
// assets and links need that prefix. User/org pages (<user>.github.io) and
// local development stay at the domain root.
function resolveBasePath() {
	if (process.env.GITHUB_PAGES !== "true") {
		return "";
	}
	const repo = process.env.GITHUB_REPOSITORY?.split("/").at(-1);
	if (!repo || repo.endsWith(".github.io")) {
		return "";
	}
	return `/${repo}`;
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
	output: "export",
	basePath,
	trailingSlash: true,
	images: {
		// The default image optimizer needs a server, which GitHub Pages lacks.
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_DEPLOYMENT_VERSION: deploymentVersion,
	},
};

export default nextConfig;
