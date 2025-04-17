/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UrlController = () => import('#controllers/urls_controller')

router.on('/').render('home')
router.post('/return', [UrlController, 'index'])
router.get('/about', [UrlController, 'about']).as('about')
