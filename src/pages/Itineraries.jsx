import React from 'react';

export default function Itineraries() {
  return (
    <>
      <div className='bg-amber-100 min-h-screen w-full p-6'>
        <h1 className='text-4xl font-medium p-2 text-amber-600 text-center'>Build Your Perfect Itinerary</h1>
        <div className='mx-auto justify-center p-4 max-w-2xl'>
          <p className='text-xl font-light mb-4 text-center'>
            Organize your trip day by day. Add custom activities, set times, and include notes to create a detailed plan for your adventure. Drag and drop to reorder activities.
          </p>
        </div>

        <div>
          <div class="text-center py-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-12 w-12 mx-auto mb-4 text-muted-foreground" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><h3>No itinerary yet</h3><p class="text-muted-foreground mb-6">Start building your trip by adding destinations or creating custom activities.</p><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add First Day</button></div>
        </div>
      </div>
    </>
  );
}
