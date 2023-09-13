import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import isEmail from 'validator/lib/isEmail';

function LoginForm() {
    // const { data: session } = useSession()
    const router = useRouter();
	const [invalidEmail, setInvalidEmail] = useState(true);
	const [noUser, setNoUser] = useState(false);
	const [noAuth, setNoAuth] = useState(false);

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [failed, setFailed] = useState(false);
	const [err, setErr] = useState('');

	useEffect(() => {
		if (!isEmail(email)) {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(false);
		}

		setNoAuth(false);
		setNoUser(false);

	}, [password, email]);


	async function submit(captchaToken: string) {

		try {

			if (!invalidEmail) {
				// console.log(email, password)
				const done =signIn()
				router.push('/simpleuni')
				console.log('login: ', done);
			}

			// 

		} catch (error) {
			console.log(error);
			setFailed(true);
			setErr(error  as string);
			setTimeout(() => {
				setFailed(false);
				setErr('');
			}, 2000);

		}

	}


	return (

		<>
        <div  className=' pt-28 pb-28 justify-center flex'>
        	<div className="sm:w-[500px] sm:h-[583px]">
				<div className="flex justify-center pb-16"><h1 style={{fontFamily:'arial', color:'#00FFF5', lineHeight:'30px' }} className='font-bold text-2xl pt-14'>Sign in</h1></div>
		    		<form action="" >
						<div className='relative'>
            				<div className="relative z-0 flex justify-center pb-8">
								<input onChange={(event) => { setEmail(event.target.value) }} type="text"
								className="block  px-2.5 sm:w-96 sm:text-sm text-white focus:text-gray-900 bg-transparent rounded-md border-0 border-b-4 border-teal-400 appearance-none   dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:bg-teal-400 peer"
								placeholder=" " />
								<label htmlFor="emailLogin" 
								className="absolute sm:text-sm text-gray-500 dark:text-gray-400 duration-300 transform sm:-translate-y-6 sm:scale-75 top-0 -z-10 origin-[0] sm:peer-focus:text-lg  peer-focus:text-teal-300 sm:peer-placeholder-shown:scale-100 sm:peer-placeholder-shown:translate-y-0 sm:peer-focus:scale-75  placeholder: sm:-translate-x-[150px] sm:peer-focus:-translate-y-8"
								>Username</label>
            				</div>
                			<p className={` ${noUser ? 'visible' : 'invisible'} mt-2 text-sm text-red-600 dark:text-red-500`}><span className="font-medium">Email</span> not registered</p>
            			</div>
            			<div className='relative'>
							<div className="relative z-0 flex justify-center ">
								<input type="password" onChange={(event) => { setPassword(event.target.value) }}
								className="block  px-2.5 sm:w-96 sm:text-sm text-white focus:text-gray-900 bg-transparent rounded-md border-0 border-b-4 border-teal-400 appearance-none   dark:focus:border-teal-400 focus:outline-none focus:ring-0 focus:bg-teal-400 peer"
								placeholder=" " />
								<label htmlFor="passwordLogin" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:text-lg  peer-focus:text-teal-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 placeholder: sm:-translate-x-[153px] peer-focus:-translate-y-8">Password</label>
							</div>
							<p className={` ${noAuth ? 'visible' : 'invisible'} mt-2 text-sm text-red-600 dark:text-red-500 `}><span className="font-medium">Password/ Email</span> Incorrect</p>
						</div>
            		</form>

			
					<div className="sm:w-full sm:ml-16">
						<Link href={'/forgot'} className="text-gray-500 cursor-pointer hover:underline" >Forgot password?</Link>
						<Link href="/signup">
							<button
							type="button"
							className="inline-block ml-48 sm:my-2 text-teal-400"
							>Sign-Up
							</button>
						</Link>
					</div>
					<div className='float-left sm:ml-16 mt-8'>
						<div className="text-center pt-1 mb-2 pb-1">
								<button
									type="submit"
									data-sitekey="reCAPTCHA_site_key"
									data-callback='onSubmit'
									data-action='submit'
									className="g-recaptcha inline-block px-6 py-2.5 text-black  text-md bg-cyan-500 leading-tight  rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24 mb-3">
									Login
								</button>
						</div>
					</div>
					<div className='items-center flex justify-center mt-28'>
					</div>
            </div>
        </div>

		</>
	)
}

export default LoginForm