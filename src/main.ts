import './app.css'
import App from './App.svelte'

if (navigator.userAgent.toLowerCase().match(/mobile/i)) { alert("Mobile devices aren't supported and will never be. Please use a PC or put your browser in 'Desktop Mode'.") }

const app = new App({
  target: document.getElementById('app'),
})

export default app
