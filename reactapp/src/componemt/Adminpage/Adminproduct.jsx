import React from 'react'
import Layout from './Layout'

function Adminproduct() {
  return (
    <>
      <Layout>
      <div class="flex flex-col p-4 bg-background text-foreground">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-xl font-bold">CATEGORY</h1>
    <button class="bg-accent text-accent-foreground px-4 py-2 rounded">ADD CATEGORY</button>
  </div>
  <div class="relative mb-4">
    <input type="text" placeholder="Search..." class="border border-border rounded-lg p-2 w-full" />
  </div>
  <table class="min-w-full bg-card border border-border">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b border-border">Image</th>
        <th class="py-2 px-4 border-b border-border">Name</th>
        <th class="py-2 px-4 border-b border-border">Price</th>
        <th class="py-2 px-4 border-b border-border">Status</th>
        <th class="py-2 px-4 border-b border-border">Category</th>
        <th class="py-2 px-4 border-b border-border">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-2 px-4 border-b border-border"><img src="https://placehold.co/50x50" alt="Headphones" /></td>
        <td class="py-2 px-4 border-b border-border">Headphones</td>
        <td class="py-2 px-4 border-b border-border">$20.00</td>
        <td class="py-2 px-4 border-b border-border"><span class="bg-success text-success-foreground px-2 py-1 rounded">Success</span></td>
        <td class="py-2 px-4 border-b border-border">Electronics</td>
        <td class="py-2 px-4 border-b border-border">
          <button class="text-primary">Edit</button>
          <button class="text-destructive">Delete</button>
        </td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b border-border"><img src="https://placehold.co/50x50" alt="Honor Mobile" /></td>
        <td class="py-2 px-4 border-b border-border">Honor Mobile</td>
        <td class="py-2 px-4 border-b border-border">$462.00</td>
        <td class="py-2 px-4 border-b border-border"><span class="bg-success text-success-foreground px-2 py-1 rounded">Success</span></td>
        <td class="py-2 px-4 border-b border-border">Electronics</td>
        <td class="py-2 px-4 border-b border-border">
          <button class="text-primary">Edit</button>
          <button class="text-destructive">Delete</button>
        </td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b border-border"><img src="https://placehold.co/50x50" alt="Samsung LED TV" /></td>
        <td class="py-2 px-4 border-b border-border">Samsung LED TV</td>
        <td class="py-2 px-4 border-b border-border">$652.00</td>
        <td class="py-2 px-4 border-b border-border"><span class="bg-muted text-muted-foreground px-2 py-1 rounded">Padding</span></td>
        <td class="py-2 px-4 border-b border-border">Electronics</td>
        <td class="py-2 px-4 border-b border-border">
          <button class="text-primary">Edit</button>
          <button class="text-destructive">Delete</button>
        </td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b border-border"><img src="https://placehold.co/50x50" alt="Motorola Bluetooth" /></td>
        <td class="py-2 px-4 border-b border-border">Motorola Bluetooth</td>
        <td class="py-2 px-4 border-b border-border">$25.00</td>
        <td class="py-2 px-4 border-b border-border"><span class="bg-success text-success-foreground px-2 py-1 rounded">Success</span></td>
        <td class="py-2 px-4 border-b border-border">Electronics</td>
        <td class="py-2 px-4 border-b border-border">
          <button class="text-primary">Edit</button>
          <button class="text-destructive">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
      </Layout>
    </>
  )
}

export default Adminproduct
