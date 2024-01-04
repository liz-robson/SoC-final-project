import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Login from '../src/app/login/page'
import NEXT_PUBLIC_SUPABASE_URL from '../env.local'
import NEXT_PUBLIC_SUPABASE_ANON_KEY from '../env.local'
 
test('Login', async () => {
    render(await Login())
    expect(screen.getByRole('heading', { level: 1, name: 'Sign In' })).toBeDefined()
})