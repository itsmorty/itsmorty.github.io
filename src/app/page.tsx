"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
	Terminal,
	Database,
	ShieldCheck,
	Code2,
	Code,
	Server,
	Cpu,
} from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { useTerminalStore } from "../store/useTerminalStore";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const deploymentVersion = process.env.NEXT_PUBLIC_DEPLOYMENT_VERSION ?? "dev-local";

export default function Home() {
	const { activeTab, setActiveTab, commandsRun, incrementCommands } =
		useTerminalStore();

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);
		incrementCommands();
	};

	const tabs = [
		{ id: "about", label: "./about.sh" },
		{ id: "experience", label: "./experience.sh" },
		{ id: "projects", label: "./projects.sh" },
		{ id: "philosophy", label: "./philosophy.sh" },
	];

	return (
		<div className="flex min-h-screen flex-col items-center p-6 sm:p-12 lg:p-24 bg-background text-foreground font-mono">
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-4xl flex lg:flex-row not-lg:flex-col justify-between lg:items-center gap-4 mb-12 border-b border-border-green pb-6"
			>
				<div className="flex items-center gap-3">
					<Terminal className="text-brand w-8 h-8" />
					<div className="flex-1" >
						<h1 className="text-2xl font-bold font-sans text-brand tracking-tight">
							Morteza Rahmani
						</h1>
						<p className="text-sm text-brand-muted">
							v{deploymentVersion} | Front-End Engineering x Creative Programming
						</p>
					</div>
				</div>
				<div className="flex lg:flex-col items-end justify-between gap-4">
					<div className="text-xs text-brand-muted">
						Commands executed: {commandsRun}
					</div>
					<div className="flex items-center gap-3">
						<a href="https://github.com/itsmorty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors">
							<IconBrandGithub className="w-5 h-5" />
						</a>
						<a href="https://linkedin.com/in/morteza-rhmn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors">
							<IconBrandLinkedin className="w-5 h-5" />
						</a>
						<a href="https://x.com/morteza_rhmn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors">
							<IconBrandX className="w-5 h-5" />
						</a>
					</div>
				</div>
			</motion.header>

			<main className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">
				<motion.aside
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2 lg:w-64 shrink-0"
				>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							onClick={() => handleTabClick(tab.id)}
							className={cn(
								"text-left px-4 py-3 rounded-md border transition-all duration-200 cursor-pointer flex items-center gap-2",
								activeTab === tab.id
									? "bg-brand/10 border-brand text-brand"
									: "border-border text-muted-foreground hover:border-border-green hover:text-foreground",
							)}
						>
							<Code2 className="w-4 h-4" />
							{tab.label}
						</button>
					))}
				</motion.aside>

				<motion.section
					key={activeTab}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="flex-1 bg-muted/30 border border-border p-6 rounded-lg relative overflow-hidden"
				>
					<div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand to-transparent" />

					{activeTab === "about" && (
						<div className="space-y-6">
							<h2 className="text-xl text-brand font-bold flex items-center gap-2">
								<span className="text-brand-muted">$</span> cat about.md
							</h2>
						<div className="lg:clearfix">
							<div className="relative lg:float-left mx-auto mb-6 lg:mx-0 lg:mr-6 lg:mb-3 w-40 h-40 rounded-lg overflow-hidden border border-border-green/50 bg-background/50 shrink-0">
									<Image
										src="/images/profile.jpg"
										alt="Profile photo"
										fill
										sizes="160px"
										className="object-cover"
										priority
									/>
								</div>
								<div className="space-y-4 text-foreground/80 leading-relaxed">
									<p>
										Hi, I'm Morteza Rahmani, a{" "}
										<span className="text-brand font-semibold">
											Front-End Developer
										</span>{" "}
										currently focused on{" "}
										<span className="text-brand font-semibold">
											Creative Programming
										</span>
										.
									</p>
									<p>
										My path went from a short internship through full-stack
										freelancing to front-end engineering and eventually leading
										a product team. I care about code that works precisely and
										feels alive.
									</p>
									<div className="pt-4 border-t border-border space-y-3">
										<p className="text-xs text-brand-muted">{"// technologies"}</p>
										<div className="flex flex-wrap gap-2">
											{[
												"Next.js", "React.js", "TypeScript", "JavaScript",
												"Capacitor", "Git", "GitHub Actions", "Three.js",
												"GLSL", "Redux", "Node.js", "Rive", "GSAP",
											].map((tech) => (
												<div
													key={tech}
													className="px-3 py-1 bg-brand/10 text-brand text-sm rounded border border-brand/20"
												>
													{tech}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "experience" && (
						<div className="space-y-6">
							<h2 className="text-xl text-brand font-bold flex items-center gap-2">
								<span className="text-brand-muted">$</span> tail -n 2
								experience.log
							</h2>
							<div className="space-y-8">
								<div className="relative pl-6 border-l border-border hover:border-brand transition-colors">
									<span className="absolute -left-1.25 w-2.25 h-2.25 rounded-full bg-brand" />
									<h3 className="font-semibold text-lg">
										Front-End Developer to Front-End Lead @{" "}
										<a
											href="https://vellso.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-brand hover:underline"
										>
											Vellso
										</a>
									</h3>
									<p className="text-sm text-muted-foreground mb-3">
										4+ years
									</p>
									<p className="text-foreground/80 text-sm">
										Joined as a front-end developer and grew into a lead role
										on the same product. The work gave me deep hands-on
										experience in architecture, performance, collaboration, and
										long-term product thinking.
									</p>
								</div>
								<div className="relative pl-6 border-l border-border hover:border-brand-muted transition-colors">
									<span className="absolute -left-1.25 w-2.25 h-2.25 rounded-full bg-brand-muted" />
									<h3 className="font-semibold text-lg">
										Freelance Full-Stack Developer (Laravel)
									</h3>
									<p className="text-sm text-muted-foreground mb-3">
										About 2 years
									</p>
									<p className="text-foreground/80 text-sm">
										Started right after internship as a junior freelancer. Built
										several WordPress and Laravel projects, handling both
										front-end and back-end work while learning professional
										delivery standards through real client projects.
									</p>
								</div>
							</div>
						</div>
					)}

					{activeTab === "projects" && (
						<div className="space-y-6">
							<h2 className="text-xl text-brand font-bold flex items-center gap-2">
								<span className="text-brand-muted">$</span> ls -la ./projects
							</h2>
							<div className="grid grid-cols-1 gap-4">
								<div className="border border-border p-4 rounded-md bg-background hover:border-brand transition-colors group">
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-lg font-semibold group-hover:text-brand transition-colors flex items-center gap-2">
											<Server className="w-4 h-4 text-brand-muted" />
											<a
												href="https://vellso.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												Vellso
											</a>
										</h3>
									</div>
									<p className="text-sm text-foreground/70 mb-4">
										The product I invested the most years into. It shaped my
										engineering standards through real-world lessons in
										architecture, performance at scale, and team ownership.
									</p>
									<div className="flex flex-wrap gap-2">
										{[
											"Next.js", "React.js", "Vite", "Redux", "GLSL",
											"Motion", "GSAP", "GitHub Actions", "Capacitor",
										].map((tech) => (
											<span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="border border-border p-4 rounded-md bg-background hover:border-brand transition-colors border-dashed opacity-70">
									<h3 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
										<Code className="w-4 h-4" />
										Creative Programming Sandbox
									</h3>
									<p className="text-sm text-foreground/50 mt-1">
										Ongoing explorations in physics, custom shaders, and
										generative art.
									</p>
								</div>
							</div>
						</div>
					)}

					{activeTab === "philosophy" && (
						<div className="space-y-6">
							<h2 className="text-xl text-brand font-bold flex items-center gap-2">
								<span className="text-brand-muted">$</span> grep "standards"
								philosophy.txt
							</h2>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="p-4 bg-background border border-border rounded flex flex-col gap-2">
									<ShieldCheck className="w-6 h-6 text-brand" />
									<h3 className="font-semibold">
										Professional Growth Mindset
									</h3>
									<p className="text-sm text-foreground/70">
										Reading The Clean Coder and validating its ideas through my
										day-to-day work on Vellso helped me shift from "just shipping"
										to practicing disciplined, professional software development.
									</p>
								</div>
								<div className="p-4 bg-background border border-border rounded flex flex-col gap-2">
									<Database className="w-6 h-6 text-brand" />
									<h3 className="font-semibold">System Design</h3>
									<p className="text-sm text-foreground/70">
										Viewing applications holistically. Designing data flows and
										microservices that are isolated, scalable, and resilient.
									</p>
								</div>
								<div className="p-4 bg-background border border-border rounded flex flex-col gap-2 sm:col-span-2">
									<Cpu className="w-6 h-6 text-brand" />
									<h3 className="font-semibold">Where Computation Meets Creativity</h3>
									<p className="text-sm text-foreground/70">
										I believe the most compelling interfaces live at the
										intersection of mathematical precision and artistic intent.
										Whether it's a physics simulation, a generative shader, or
										a carefully tuned animation curve, the underlying algorithm
										is the skeleton and the creative expression is what gives
										it life. I'm drawn to work that demands both.
									</p>
								</div>
							</div>
						</div>
					)}
				</motion.section>
			</main>
		</div>
	);
}
