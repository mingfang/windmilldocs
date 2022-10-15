import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from '../components/Slideshow';

import {
	CheckIcon,
	ClockIcon,
	DocumentAddIcon,
	LibraryIcon,
	LightningBoltIcon,
	LinkIcon,
	LockClosedIcon,
	LoginIcon,
	PencilIcon,
	PuzzleIcon,
	ShieldCheckIcon,
	SwitchHorizontalIcon
} from '@heroicons/react/outline';

const features = [
	{
		name: <div className="flex  justify-center">UI? Done</div>,
		description: 'UI is autogenerated from script parameters and flow inputs',
		icon: LightningBoltIcon
	},
	{
		name: 'Make it Flow',
		description:
			'Scripts are standalone apps that can be reused and chained as building blocks to create more complex Flows',
		icon: LinkIcon
	},
	{
		name: 'Schedules',
		description:
			'Trigger scripts and flows using cron-like schedules, or via an automatically generated webhook',
		icon: ClockIcon
	},
	{
		name: 'OAuth integrations & external apps',
		description: 'Connect to external apps using any OAuth providers or API keys',
		icon: PuzzleIcon
	},
	{
		name: 'Granular Permissions & Approval flows',
		description:
			'Credentials are tightly permissioned to users and groups. Ask approvals as a step of your flow',
		icon: LockClosedIcon
	},
	{
		name: 'Deploy from Github & Exportable Workspace',
		description: (
			<span>
				<a href="https://github.com/windmill-labs/deploy-from-github-example">Sync with Github</a>{' '}
				and version your flow and scripts externally if needed
			</span>
		),
		icon: SwitchHorizontalIcon
	},
	{
		name: 'Powerful webeditor with code intelligence and preview',
		description:
			'Use your IDE or use ours, the web editor is powered by Monaco and LSP with a preview feature to quickly iterate',
		icon: PencilIcon
	},
	{
		name: 'Secrets',
		description: `Separate credentials and sensitive values from your logic. Keep it secure and tightly permissioned`,
		icon: ShieldCheckIcon
	},
	{
		name: 'Slack commands, Webhooks, Lambda style endpoints',
		description:
			'Trigger scripts from a slack workspace, or using webhooks. Implement your backends using the wait-for-result endpoints',
		icon: LoginIcon
	},
	{
		name: 'Versioning',
		description: 'Scripts are never overwritten, they are versioned',
		icon: DocumentAddIcon
	},
	{
		name: 'WindmillHub',
		description: (
			<span>
				Community driven, vetted and tested. Discover, share and use scripts via{' '}
				<a href="https://hub.windmill.dev/">WindmillHub</a>{' '}
			</span>
		),
		icon: LibraryIcon
	},
	{
		name: 'Performant, Scalable, production-grade',
		description: (
			<span>
				Written in Rust, minimal overhead, designed for scale and extremely reliable.{' '}
				<a href="https://docs.windmill.dev/docs/benchmark">Similar to AWS Lambda.</a>
			</span>
		),
		icon: LightningBoltIcon
	}
];

{
	/* <div className="mt-40">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => (
								<div key={feature.name} className="pt-6">
									<div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
										<div className="-mt-6">
											<div>
												<span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
													<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
												</span>
											</div>
											<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
												{feature.name}
											</h3>
											<p className="mt-5 text-base text-gray-500">{feature.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div> */
}

<p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">
	Write a script, or get started from a community template. Get an app with an autogenerated UI,
	permissions, run schedules and all you need to automate your work. Chain apps into complex
	workflows.
</p>;

export default function HomepageFeatures() {
	return (
		<div className="section">
			<div className="section-header">
				<h1 class="section-title">Turn scripts into internal workflows and UIs</h1>
			</div>
			<div className="overflow-hidden">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense -mb-12">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
						<div>
							<div className="mt-6">
								<h2 className="subsection-title">
									<span className="block xl:inline">Start with a script</span>
									<span className="font-light ">, or pick one from WindmillHub</span>
								</h2>
								<p className="section-text">
									Develop and maintain scripts from our feature-complete webeditor or use your own
									IDE and{' '}
									<a href="https://github.com/windmill-labs/deploy-from-github-example">
										deploy from Github
									</a>
									.
								</p>
								<p className="section-text">
									Explore common scripts from <a href="https://hub.windmill.dev/">WindmillHub</a>.
									Build and share your own with your team, or with the community.
								</p>
								<p className="section-text">
									Upskill your less technical teammates. It's easier to learn writing useful scripts
									with Windmill.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2">
						<div className="flex flex-col p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<div className="w-full lg:max-w-none m-auto">
								<img
									className="object-scale-down h-2/3 m-auto mt-12"
									src="/img/landing_page/script_editor.png"
									alt="Script editor"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-12">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-20">
					<div className="px-4 max-w-xl sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="subsection-header">
								<h2 className="subsection-title">... get an app</h2>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">Autogenerated UI </h3>
									<p>
										Share your app with non-technical users without spending time building the UI.
										It's automatically generated from script parameters, and customizable.
									</p>
								</div>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">Simple secret management</h3>
									<p>
										Credentials and sensitive values are tightly permissioned and stored securely as
										secrets.
									</p>
								</div>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">Collaboration & RBAC</h3>
									<p>
										Define visibility, edit rights and executability for your scripts, resources,
										schedules, etc, using group and user-level granular permissions.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<div className="w-full lg:max-w-none m-auto">
								<img className="" src="/img/parser.png" alt="UI parser" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="overflow-hidden">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense ">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
						<div>
							<div className="mt-6">
								<h2 className="subsection-title">
									<span className="block xl:inline">Chain scripts into Flows</span>
								</h2>
								<p className="section-text">
									Build complex Flows from atomic apps. Automatically trigger apps and Flow from
									webhooks, a schedule, watching for events, or slack.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2">
						<div className="flex flex-col p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full ">
							<div className="w-full lg:max-w-none m-auto pt-12 pr-24">
								<img
									className="object-scale-down max-h-96 m-auto"
									src="../img/landing_page/flow_zoomed.png"
									alt="Flow UI"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-20">
					<div className="px-4 max-w-xl sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="subsection-header">
								<h2 className="subsection-title">Deploy and manage</h2>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">
										Automating things is a no-brainer when there's a paved path.
									</h3>
									<p>
										Once Windmill is setup, your team never has to worry about where to run scripts
										for internal operations.
									</p>
								</div>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">Deploy from GitHub</h3>
									<p>
										or write and manage your scripts directly from Windmill, or a mix of both, up to
										you.
									</p>
								</div>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">Audit logs</h3>
									<p>See all past executions, and find the root cause of mishaps quickly.</p>
								</div>

								<div className="section-text pl-6">
									<h3 className="font-bold text-lg">OAuth</h3>
									<p>
										{' '}
										Windmill natively integrates with OAuth providers to manage access and refresh
										tokens. If your provider isn't supported yet, we will
										<a href="/docs/contributors_guide#add-an-oauth-provider"> add it easily</a>.
									</p>
								</div>

								<p className="section-text"></p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<div className="w-full lg:max-w-none m-auto">
								<img
									className="object-scale-down max-h-96 m-auto"
									src="../img/audit_logs_.png"
									alt="Audit logs and enterprise features"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-24">
				<div className="mx-auto px-8 max-w-7xl">
					<div>
						<div>
							<div className="my-6">
								<h1 className="section-title text-center">
									Replace all your sparely used niche tools
								</h1>

								<p className="section-text sm:w-2/3 m-auto">
									Are your teams maintaining various niche internal tools to power ops teams? Costly
									one-off integrations with HubSpot, Salesforce, Slack, etc? Do you have scripts in
									lambdas, cron tabs, or cloud instances everybody has forgotten about except
									(maybe!) a single developer?
								</p>
								<p className="section-text sm:w-2/3 m-auto">
									With Windmill, you can:
									<ul className="list-disc pl-6 mt-1">
										<li className="px-3">Bring all your scripts in a single place</li>
										<li className="px-3">Have a repeatable way to build and deploy new scripts</li>
										<li className="px-3">Reuse code, connectors and integrations</li>
										<li className="px-3">Centrally manage secrets, users and roles, audit logs</li>
										<li className="px-3">
											And <a href="/docs">more</a>
										</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
