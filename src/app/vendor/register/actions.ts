'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitVendorApplication(
  name: string,
  description: string,
  category: string,
  serviceArea: string,
  images: string[]
) {
  const supabase = await createClient()

  // Ensure user is authenticated
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    throw new Error('Not authenticated')
  }

  // Insert vendor record
  const { error } = await supabase
    .from('vendors')
    .insert({
      user_id: user.id,
      name,
      description,
      category,
      service_area: serviceArea,
      images,
      status: 'active'
    })

  if (error) {
    console.error('Error inserting vendor:', error)
    throw new Error(error.message)
  }

  revalidatePath('/vendors')
  
  return { success: true }
}
