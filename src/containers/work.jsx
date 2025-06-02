/* eslint-disable react/prop-types */
import React from "react"
import Scrollable from "../components/scrollable"

export default function Work() {
	return (
		<div
			id="work"
			className="mx-auto text-white bg-black border-4 container border-black">
			<div className="container mx-auto p-10 text-center">
				<div>
					<h1 className="text-2xl md:text-4xl black-text-shadow font-medium">
						All that I've worked on
					</h1>
					<p className="mt-5 text-sm antialiased">Some of my recent projects</p>
					<Scrollable className="grid grid-row-1 grid-flow-col gap-8 mt-10 md:mx-10 py-4">
						<div className="overflow-auto border-[3px] border-yellow-400 w-[400px] h-[200px] md:w-[600px] md:h-[300px] mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="interviewbee.webp"
									alt="InterviewBee"
									className="work-card-image rounded-md object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-xs md:text-lg font-semibold mb-2 text-left">
											InterviewBee
										</p>
										<p className="text-[10px] md:text-xs my-2 text-left">
											I developed a desktop application for both macOS and
											Windows that provides real-time interview support. The app
											includes features like live transcription, AI-generated
											responses based on the transcriptions, and screen
											analysis. Additionally, the app is completely undetectable
											by screen capture mechanisms.
										</p>
										<p className="mt-6">
											<a
												href="https://interviewbee.ai/"
												rel="noopener noreferrer"
												target="_blank"
												className="text-[10px] md:text-xs mt-2 text-white rounded hover:text-black transition duration-300">
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-[3px] border-green-400 w-[400px] h-[200px] md:w-[600px] md:h-[300px] mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="wagease.webp"
									alt="Wagease"
									className="work-card-image rounded-md object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-xs md:text-lg font-semibold mb-2 text-left">
											Wagease
										</p>
										<p className="text-[10px] md:text-xs my-2 text-left">
											I built a payroll management Software as a Service (SaaS)
											application. And configured proper deployment
											configurations ensuring effective management of employee
											salaries, taxes, and benefits within a cloud-based
											platform.
										</p>
										<p className="mt-6">
											<a
												href="https://www.wagease.com/"
												rel="noopener noreferrer"
												target="_blank"
												className="text-[10px] md:text-xs mt-2 text-white rounded hover:text-black transition duration-300">
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-[3px] border-indigo-500 w-[400px] h-[200px] md:w-[600px] md:h-[300px] mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="tenacity.webp"
									alt=" Tenacity Writing"
									className="work-card-image rounded object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-xs md:text-lg font-semibold mb-2 text-left">
											Tenacity Writing
										</p>
										<p className="text-[10px] md:text-xs  my-2 text-left">
											I built a web application streamlining tasks for a writing
											company. It automates and organizes their services,
											simplifying management. It enhances the efficiency of the
											agency's operations, allowing smoother service delivery.
										</p>
										<p className="mt-6">
											<a
												rel="noopener noreferrer"
												href="https://www.tenacitywriting.com/"
												target="_blank"
												className="text-[10px] md:text-xs mt-2 text-white rounded hover:text-black transition duration-300">
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-[3px] border-indigo-300 w-[400px] h-[200px] md:w-[600px] md:h-[300px] mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="attrione.webp"
									alt="AttriOne"
									className="work-card-image rounded object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-xs md:text-lg font-semibold mb-2 text-left">
											AttriOne (Audiencely)
										</p>
										<p className="text-[10px] md:text-xs my-2 text-left">
											I built a micro-SaaS solution simplifying UTM link
											generation and management while offering fundamental
											analytics. This tool efficiently assists in creating and
											tracking links, enhancing marketing strategies with
											user-friendly insights.
										</p>
										<p className="mt-6">
											<a
												rel="noopener noreferrer"
												href="https://www.audiencelyhq.com/"
												target="_blank"
												className="text-[10px] md:text-xs mt-2 text-white rounded hover:text-black transition duration-300">
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</Scrollable>
				</div>

				<div className="flex justify-center mt-5">
					<a
						rel="noopener noreferrer"
						className="shadow-lg relative w-auto py-2 px-4 text-xs md:text-sm font-semibold antialiased rounded-md text-white hover:text-gray-400 transition duration-300"
						href="https://github.com/monarchmaisuriya?tab=repositories"
						target="_blank">
						View More
					</a>
				</div>
			</div>
		</div>
	)
}
