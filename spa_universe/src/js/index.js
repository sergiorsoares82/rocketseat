import { Router } from './router.js';

const router = new Router();

router.add('/', './src/pages/home.html');
router.add('/universe', './src/pages/universe.html');
router.add('/explore', './src/pages/explore.html');

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();
