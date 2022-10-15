import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Destroy: NextPage = () => {
  const router = useRouter()

  function handleSubmit(event: any) {
    event.preventDefault();
    router.push("/destroyed")
  }

  return (

    <div className="w-full items-center flex flex-col gap-5">

      <h1>bank-of-america-official
      </h1>
      <dl className="w-full">
        <dt>Identity Pubkey</dt>
        <dd>02f4dd8dceb52a891ce6aaa5ada947728cdf5f14fc7fb53445136afc7c736dd854</dd>
        <dt>Active Channels</dt>
        <dd>20</dd>
        <dt>Inactive Channels</dt>
        <dd>6</dd>
      </dl>


      <form onSubmit={handleSubmit}>
        <input type="submit" value="FORCE CLOSE
26 CHANNELS"></input>
      </form>
    </div>

  )
}

export default Destroy
