import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookies";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [errorMessege, setErrorMessage] = useState({ email: "", password: "" })
	const router = useRouter();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await fetch(`${process.env.BASE_URL}/api/auth/login`, {
				method: "POST",
				body: JSON.stringify({ ...data }),
			})
				.then((res) => res.json())
				.then(async (res) => {
					console.log(res);
					if (res.status === 202) {
						const check = Cookies.setItem("token", res.data.token, {
							expires: 7,
						});
						if (check) {
							router.push("/");
						}
					} else if (res.status === 200) {
						setErrorMessage({ ...errorMessege, ...res.data });
					}
				});
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="fullpage">
			<main className="main-content  mt-0">
				<section>
					<div className="page-header min-vh-75">
						<div className="container height100vh">
							<div className="row">
								<div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
									<div className="card card-plain mt-8">
										<div className="card-header pb-0 text-left bg-transparent">
											<h3 className="font-weight-bolder text-info text-gradient">
												Welcome back
											</h3>
											<p className="mb-0">
												Enter your email and password to sign in
											</p>
										</div>
										<div className="card-body">
											<form role="form" onSubmit={handleSubmit}>
												<label>Email</label>
												<div className="mb-3">
													<input
														type="email"
														className="form-control"
														placeholder="Email"
														aria-label="Email"
														aria-describedby="email-addon"
														onChange={(e) =>
															setData({ ...data, email: e.target.value })
														}

													/>
													<span>{errorMessege.email}</span>
												</div>
												<label>Password</label>
												<div className="mb-3">
													<input
														type="password"
														className="form-control"
														placeholder="Password"
														aria-label="Password"
														aria-describedby="password-addon"
														onChange={(e) =>
															setData({ ...data, password: e.target.value })
														}
													/>
													<span>{errorMessege.password}</span>

												</div>
												{/* <div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="rememberMe"
														defaultChecked
													/>
													<label
														className="form-check-label"
														htmlFor="rememberMe"
													>
														Remember me
													</label>
												</div> */}
												<div className="text-center">
													<button
														type="submit"
														className="btn bg-gradient-info w-100 mt-4 mb-0"
													>
														Sign in
													</button>
												</div>
											</form>
										</div>
										<div className="card-footer text-center pt-0 px-lg-2 px-1">
											<p className="mb-4 text-sm mx-auto">
												Don&apos;t have an account?
												<Link
													href="/register"
													className="text-info text-gradient font-weight-bold"
												>
													Sign up
												</Link>
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
										<div
											className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
											style={{
												backgroundImage:
													'url("../assets/img/curved-images/curved6.jpg")',
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Login;
