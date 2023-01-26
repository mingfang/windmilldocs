import React from 'react';
import LandingSection from '../landing/LandingSection';
import FeatureCard from '../landing/FeatureCard';

const data = [
	{
		title: 'Polyglott',
		description: 'Python, Typescript, Go, Bash scripts with any dependencies'
	},

	{
		title: 'Scalable',
		description: 'Run them at scale on your infra or ours'
	},
	{
		title: 'Open source',
		description:
			'Open-source alternative to Airplane, Superblocks, Retool. Simplified Temporal, Airflow.'
	},
	{
		title: 'Schedules',
		description:
			'Trigger scripts and flows using cron-like schedules, or via an automatically generated webhook'
	}
];

export default function FlowSection() {
	return (
		<LandingSection bgClass="bg-gradient-to-br from-white to-green-50">
			<div className="flex flex-col gap-8 justify-center">
				<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
					Flows
				</h1>

				<span className="text-lg text-gray-600 max-w-3xl">
					Build complex Flows from atomic apps. Automatically trigger apps and Flow from webhooks, a
					schedule, watching for events, or slack.
				</span>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
					<div class="flex flex-col w-full gap-2 italic">
						<img className="border-2 h-full rounded-xl" src="homescreen.png"></img>
						<span className="text-gray-500 text-center w-full text-sm">Lorem ipsum</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{data.map((item) => (
							<FeatureCard title={item.title} color="green">
								{item.description}
							</FeatureCard>
						))}
					</div>
				</div>
				<div className="flex">
					<button
						type="button"
						className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Explore scripts on the Hub
					</button>
				</div>
			</div>
		</LandingSection>
	);
}