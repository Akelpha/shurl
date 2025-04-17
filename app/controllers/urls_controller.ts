import QRCode from 'qrcode'
import fetch from 'node-fetch'
import type { HttpContext } from '@adonisjs/core/http'

export default class UrlsController {
  /**
   * Display a list of resource
   */
  async index({ request, view }: HttpContext) {
    const originalUrl = request.input('url') // Récupère le paramètre 'url'

    if (!originalUrl) {
      return view.render('error', { error: 'Aucune URL fournie' })
    }

    try {
      const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`
      const fetchResponse = await fetch(apiUrl)
      const shortUrl = await fetchResponse.text()

      // Génération du QR code
      const qrCodeUrl = await QRCode.toDataURL(shortUrl)

      // Rendre la vue avec les données
      return view.render('pages/return', {
        shortUrl,
        qrCodeUrl,
      })
    } catch (error) {
      console.error("Erreur lors de la génération de l'URL courte ou du QR code", error)
      return view.render('error', {
        error: "Erreur lors de la génération de l'URL courte ou du QR code",
      })
    }
  }
  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  // /**
  //  * Display form to create a new record
  //  */
  // async create({}: HttpContext) {}

  // /**
  //  * Handle form submission for the create action
  //  */
  // async store({ request }: HttpContext) {}

  // /**
  //  * Show individual record
  //  */
  // async show({ params }: HttpContext) {}

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) {}
}
