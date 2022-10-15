import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { BUTTON } from '../util/constants';

const Home: NextPage = () => {
  const router = useRouter()

  function handleSubmit(event: any) {
    event.preventDefault();
    router.push("/destroy")
  }

  return (
    <>
      <h1 className="text-5xl font-bold uppercase text-[#03E3FE] drop-shadow-[2px_2px_0px_#000000] text-left">
        Node Destroyer
      </h1>

      <h2 className="text-2xl italic uppercase font-semibold text-left">
        "Let's ruin your node"
      </h2>

      <h2 className="text-2xl uppercase text-left">
        Enter your <a href="https://github.com/lightninglabs/lightning-node-connect">LNC Passphrase</a> to suffer*
      </h2>

      <form className="flex sm:flex-row flex-col items-start gap-2 w-full" onSubmit={handleSubmit}>
        <input className="p-2 w-full text-2xl border-2 border-black bg-gray-100 shadow-inner" type="text" placeholder='artefact morning piano photo consider light'></input>
        <input type="submit" value="CONNECT"></input>
      </form>
      <p className="small italic mt-3 text-left">
        *We'll help you close all your channels and sweep your funds.
      </p>
    </>
  )
}

export default Home
