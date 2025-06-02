import { RiReactjsLine } from "react-icons/ri"
import { DiMysql, DiMongodb, DiPython } from "react-icons/di"
import { TbBrandReactNative, TbBrandGolang } from "react-icons/tb"
import { FaGitAlt } from "react-icons/fa6"
import { FaNodeJs } from "react-icons/fa"
import { IoLogoElectron } from "react-icons/io5"
import {
	SiTypescript,
	SiJavascript,
	SiJest,
	SiPostgresql,
	SiMocha,
	SiCypress,
	SiGooglecloud,
	SiDocker,
	SiNextdotjs,
	SiAmazonaws,
	SiRedis,
	SiVitest,
	SiPytest,
	SiSwagger,
	SiGithubactions,
} from "react-icons/si"
import { AiOutlineKubernetes } from "react-icons/ai"
import Scrollable from "../components/scrollable"

export default function Skills() {
	return (
		<div className="mx-auto bg-white container">
			<div id="skills" className="text-center pt-10 mb-20 ">
				<div className="mx-auto container mb-10">
					<div>
						<h1 className="font-medium text-2xl white-text-shadow md:text-4xl md:mx-2">
							All that you need
						</h1>
						<p className="mt-5 text-sm">I usually work with</p>
					</div>

					<div className="flex flex-wrap justify-evenly">
						<Scrollable className="grid grid-flow-row grid-cols-3 lg:grid-rows-4 lg:grid-flow-col gap-2 mt-5 md:mx-10 py-4 text-white">
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiJavascript className="text-[#f2db30] text-[0.75rem] md:text-[1.15rem] m-[4px_2px_0_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://en.wikipedia.org/wiki/JavaScript"
										rel="noopener noreferrer"
										target="_blank">
										JavaScript
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiTypescript className="text-[#3178C6] text-[0.75rem] md:text-[1.15rem] m-[4px_2px_0_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.typescriptlang.org/"
										rel="noopener noreferrer"
										target="_blank">
										TypeScript
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<FaNodeJs className="text-[#43A047] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://nodejs.org/en"
										rel="noopener noreferrer"
										target="_blank">
										Node.js
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<RiReactjsLine className="text-[#56C1DE] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://reactjs.org/"
										rel="noopener noreferrer"
										target="_blank">
										React
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<DiPython className="text-[#306998] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.python.org/"
										rel="noopener noreferrer"
										target="_blank">
										Python
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<TbBrandGolang className="text-[#3F9586] text-[1.5rem] md:text-[2rem] m-[-3px_-3px_-3px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem] mt-[1px]"
										href="https://go.dev/"
										rel="noopener noreferrer"
										target="_blank">
										Go
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<IoLogoElectron className="text-[#3F9586] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.electronjs.org/"
										rel="noopener noreferrer"
										target="_blank">
										Electron
									</a>
								</button>
							</div>

							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiAmazonaws className="text-[#ffc107] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://aws.amazon.com/"
										rel="noopener noreferrer"
										target="_blank">
										AWS
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<TbBrandReactNative className="text-[#E67972] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://reactnative.dev/"
										rel="noopener noreferrer"
										target="_blank">
										R.Native
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<DiMysql className="text-[#389fe0] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.mysql.com/"
										rel="noopener noreferrer"
										target="_blank">
										MySQL
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<DiMongodb className="text-[#4A944C] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.mongodb.com/"
										rel="noopener noreferrer"
										target="_blank">
										MongoDB
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiPostgresql className="text-[#4180b3] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.postgresql.org/"
										rel="noopener noreferrer"
										target="_blank">
										Postgres
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiJest className="text-[#c94d44] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://jestjs.io/"
										rel="noopener noreferrer"
										target="_blank">
										Jest
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiCypress className="text-[#52c89d] text-[1.125rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.cypress.io/"
										rel="noopener noreferrer"
										target="_blank">
										Cypress
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiMocha className="text-[#8d5640] text-[1.125rem] md:text-[1.65rem] m-[-1.5px_0_0_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://mochajs.org/"
										rel="noopener noreferrer"
										target="_blank">
										Mocha
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiGooglecloud className="text-[#F5AD42] text-[1.1rem] md:text-[1.6rem] m-[-1.5px_-6px_-1.5px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://cloud.google.com/products"
										rel="noopener noreferrer"
										target="_blank">
										GCP
									</a>
								</button>
							</div>

							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiDocker className="text-[#06ade5] text-[1rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://www.docker.com/"
										rel="noopener noreferrer"
										target="_blank">
										Docker
									</a>
								</button>
							</div>

							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiGithubactions className="text-[#06ade5] text-[1rem] md:text-[1.5rem]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://en.wikipedia.org/wiki/CI/CD"
										rel="noopener noreferrer"
										target="_blank">
										CI/CD
									</a>
								</button>
							</div>

							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiVitest className="text-[#f4eb68] text-[1.125rem] md:text-[1.5rem] m-[-1px_-10.5px_-1.5px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://vitest.dev/"
										rel="noopener noreferrer"
										target="_blank">
										Vitest
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiPytest className="text-[#306998] text-[1.125rem] md:text-[1.5rem] m-[-1px_-10.5px_-1.5px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://docs.pytest.org/en/stable/"
										rel="noopener noreferrer"
										target="_blank">
										PyTest
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<FaGitAlt className="text-[#ED4C34] text-[1.125rem] md:text-[1.75rem] m-[-1.5px_-10.5px_-1.5px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://git-scm.com/"
										rel="noopener noreferrer"
										target="_blank">
										Git
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiRedis className="text-[#f7725e] text-[1.125rem] md:text-[1.75rem] m-[-1.5px_-10.5px_-1.5px_0]" />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://redis.io/"
										rel="noopener noreferrer"
										target="_blank">
										&nbsp;Redis
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<AiOutlineKubernetes className="text-[#4d83e2] text-[1.125rem] md:text-[1.6rem] " />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://kubernetes.io/"
										rel="noopener noreferrer"
										target="_blank">
										&nbsp;Kubernetes
									</a>
								</button>
							</div>
							<div>
								<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-lg p-2.5 md:p-4  w-[97.5px] md:w-[150px] flex justify-evenly">
									<SiSwagger className="text-[#54d99e] text-[1.125rem] md:text-[1.6rem] " />
									<a
										className="flex flex-row antialiased text-[0.65rem] md:text-[1rem]"
										href="https://swagger.io/"
										rel="noopener noreferrer"
										target="_blank">
										&nbsp;Swagger
									</a>
								</button>
							</div>
						</Scrollable>
					</div>

					<p className="mt-5 mx-10 md:mx-0 text-sm">
						And I can quickly learn and adapt to anything
					</p>
				</div>
			</div>
		</div>
	)
}
