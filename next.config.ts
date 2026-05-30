import type { NextConfig } from "next";

const deploymentSequence =
	process.env.GITHUB_RUN_NUMBER ??
	process.env.CI_PIPELINE_IID ??
	new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);

const commitSuffix = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

const deploymentVersion = commitSuffix
	? `${deploymentSequence}-${commitSuffix}`
	: deploymentSequence;

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_DEPLOYMENT_VERSION: deploymentVersion,
	},
};

export default nextConfig;
