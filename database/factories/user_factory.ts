/* eslint-disable prettier/prettier */
import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ }) => {
    return {}
  })
  .build()
