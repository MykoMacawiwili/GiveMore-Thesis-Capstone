import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import supabase from '@/app/utils/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { ImageUpload } from '@/components/ImgUpload'
import { cookies } from "next/headers";
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export const revalidate = 0;



async function GetUID() {
  const cookieStore = cookies()

  const supabase = createServerActionClient({ cookies: () => cookieStore })

  const { data: { session }, error: sessionError } = await supabase.auth.getSession()
  console.log("SESSION ID IS: " + session?.user.id)
  const uid = session?.user.id

  return (uid)
}

export default async function Example() {

  var ID = 0

  const { data: last_charity, error: post_error } = await supabase
    .from('charity')
    .select('*')
    .order('id', { ascending: false }).limit(1)

  const charity_id = last_charity?.map(charity => charity.id)
  console.log("LAST CHARITY'S ID IS: " + (charity_id![0] + 1))

  const handleSubmit = async (formData: FormData) => {
    'use server'
    const address = {
      house_number: formData.get("house_number"),
      street_name: formData.get("street_name"),
      village_name: formData.get("village_name"),
      barangay: formData.get("barangay"),
      house_name: formData.get("house_name"),
      zipcode: formData.get("zipcode"),
      city: formData.get("city"),
      province: formData.get("province")
    }

    const { data: new_address, error: address_error } = await supabase.from('address').insert(address).select();
    console.log("ADDRESS ERROR" + address_error)
    const address_id = new_address![0].id
    console.log("ADDRESS ID IS: " + address_id + ". IT WORKS!!!!!!!!!")

    const charity_details = {
      name: formData.get('org_name'),
      about: formData.get('description'),
      charity_phone: formData.get('phone'),
      charity_verified: false,
      address_id: address_id,
      email_address: formData.get('email')
    }

    const { data: charity, error: charity_error } = await supabase.from('charity').insert(charity_details).select()
    const charity_id = charity![0].id

    console.log("CHARITY ID IS: " + charity_id + ". IT WORKS!!!!!")
    console.log("CHARITY IS: " + charity)
    const charityID = charity_id
    ID = charityID
    console.log("HEY BRO " + charityID)

    const uid = await GetUID()

    const charity_member = {
      charity_id: charityID
    }

    await supabase.from('charity_member').update(charity_member).eq("user_uuid", uid)


    revalidatePath('/');
    redirect('/onboarding/pending')
  }

  return (
    <>
      <Header></Header>
      <form className="space-y-6" action={handleSubmit} method="POST">
        <div className="container mx-auto px-20 mt-16 mb-16 space-y-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Details</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly, so please be accurate.
              </p>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-6">
                <TextField
                  label="Charity Organization's Name"
                  name="org_name"
                  type="name"
                  autoComplete="name"
                  required
                />

                <TextField
                  label="Contact Number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />

                <div className="col-span-full">
                  <label htmlFor="reason" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Lorem Ipsum Dolor Sit Amet..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Organization Address</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Permanent address of the organization.</p>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <TextField
                  label="House Number"
                  name="house_number"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="House Name"
                  name="house_name"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="Street Name"
                  name="street_name"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="Village Name"
                  name="village_name"
                  type="address"
                  autoComplete="address"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <TextField
                  label="Barangay"
                  name="barangay"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="City"
                  name="city"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="Province"
                  name="province"
                  type="address"
                  autoComplete="address"
                  required
                />

                <TextField
                  label="Zipcode"
                  name="zipcode"
                  type="address"
                  autoComplete="address"
                  required
                />
              </div>
            </div>
          </div>

          <ImageUpload folderName="onboarding" charityID={ID} recordID={charity_id![0] + 1} />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6 mb-4">
          <Button type="submit" variant="solid" color="blue" className="w-1/5">
            <span>
              Submit <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </>
  )
}
