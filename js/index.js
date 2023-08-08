import { Router } from "./router.js"


const router = new Router()

router.add("/", "./pages/home.html")
router.add("/ideias", "./pages/ideias.html")
router.add("/membros", "./pages/membros.html")
router.add("/discord", "./pages/discord.html")



router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()