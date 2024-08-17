import { AlertTriangle, Ban, Bell, CheckCheck, Info } from 'lucide-react'
import './App.css'
import Alert from './components/uiAlert/Alert'

function App() {

  return (
    <>
      <Alert type={"alert-Default"} icon={<Bell size={20} />} title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque{" "}
          <a href="/">laboriosam</a> iste totam officiis beatae quas.
        </p>
      </Alert>

      <Alert
        type={"alert-Info"}
        icon={<Info size={20} />}
        title={"Note"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-Success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-danger"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-Warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />

    </>
  )
}

export default App
