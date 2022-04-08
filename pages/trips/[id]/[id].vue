<template>
  <div>
    <nav class="flex justify-between items-center">
      <div>
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" class="text-slate-400 hover:text-slate-500 transition-hover-300">
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span class="sr-only">Home</span>
                </a>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a href="#" class="ml-4 text-sm font-medium text-slate-500 hover:text-slate-700 transition-hover-300">Trips</a>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a href="#" class="ml-4 text-sm font-medium text-slate-500 hover:text-slate-700 transition-hover-300" aria-current="page">Trip one</a>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a href="#" class="ml-4 text-sm font-medium text-slate-500 hover:text-slate-700 transition-hover-300" aria-current="page">Day 1</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="flex space-x-10">
        <a href="" class="text-slate-500 font-medium hover:text-slate-700 transition-hover-300">Back</a>
        <a href="" class="text-slate-500 font-medium hover:text-slate-700 transition-hover-300">Next</a>
      </div>
    </nav>

    <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h1 class="text-slate-700 font-bold text-4xl">Adventure in Lorem Ipsum</h1>
        <span class="text-sm text-slate-500">01/01/2021</span>
        <div class="mt-6 max-h-[72vh] overflow-scroll border border-gray-100 rounded-lg">
          <div v-html="text" class="prose max-w-none text-gray-600 p-3 text-justify"></div>
        </div>
      </div>

      <div class="grid gap-4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4loXMor75kKVBB03ygwDlh?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <div class="block aspect-w-16 aspect-h-5 rounded-lg overflow-hidden">
          <div class="w-full h-full bg-slate-200"></div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="block aspect-w-16 aspect-h-8 rounded-lg overflow-hidden">
            <div class="w-full h-full bg-slate-200"></div>
          </div>
          <div class="block aspect-w-16 aspect-h-8 rounded-lg overflow-hidden">
            <div class="w-full h-full bg-slate-200"></div>
          </div>
        </div>
        <div class="block aspect-w-16 aspect-h-5 rounded-lg overflow-hidden">
          <div class="w-full h-full bg-slate-200"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

const text:string = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio. Ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc scelerisque viverra mauris in. Facilisis gravida neque convallis a cras. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Cursus in hac habitasse platea dictumst quisque. Convallis aenean et tortor at risus viverra adipiscing. A iaculis at erat pellentesque adipiscing. Congue nisi vitae suscipit tellus mauris a diam. Mattis pellentesque id nibh tortor id aliquet. Commodo sed egestas egestas fringilla phasellus faucibus. Adipiscing elit ut aliquam purus sit. Cras pulvinar mattis nunc sed. Sed augue lacus viverra vitae congue. Cras fermentum odio eu feugiat pretium nibh ipsum. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Quis blandit turpis cursus in. Condimentum mattis pellentesque id nibh tortor. Consectetur adipiscing elit ut aliquam purus.</p>
<p>Sed viverra tellus in hac habitasse platea dictumst vestibulum. Tristique risus nec feugiat in fermentum posuere urna. Ipsum dolor sit amet consectetur adipiscing. Ultrices vitae auctor eu augue ut lectus arcu. Tincidunt tortor aliquam nulla facilisi cras. Ultricies mi quis hendrerit dolor magna eget. Nunc sed blandit libero volutpat sed. Nullam ac tortor vitae purus faucibus ornare suspendisse. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Lectus vestibulum mattis ullamcorper velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Viverra suspendisse potenti nullam ac. Diam sollicitudin tempor id eu nisl nunc. In tellus integer feugiat scelerisque. Amet luctus venenatis lectus magna fringilla urna porttitor. Purus non enim praesent elementum facilisis leo vel fringilla est. Enim ut sem viverra aliquet eget sit amet tellus cras.</p>
<p>Sed euismod nisi porta lorem. Eget gravida cum sociis natoque penatibus et magnis. Venenatis urna cursus eget nunc. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Non blandit massa enim nec dui nunc mattis enim. Morbi blandit cursus risus at ultrices mi. Sit amet nisl purus in mollis nunc. Consequat semper viverra nam libero justo laoreet sit amet cursus. Orci porta non pulvinar neque. Diam volutpat commodo sed egestas. Ultricies lacus sed turpis tincidunt id aliquet. Neque laoreet suspendisse interdum consectetur. Vulputate dignissim suspendisse in est ante in.</p>
<p>Tristique et egestas quis ipsum suspendisse. Orci ac auctor augue mauris augue neque gravida. Dignissim convallis aenean et tortor. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Ipsum dolor sit amet consectetur. Dis parturient montes nascetur ridiculus mus mauris vitae. Venenatis cras sed felis eget velit aliquet sagittis. Ornare arcu odio ut sem nulla pharetra diam sit amet. Interdum velit euismod in pellentesque massa placerat. Et malesuada fames ac turpis egestas integer eget. Senectus et netus et malesuada. Blandit cursus risus at ultrices mi tempus imperdiet. Quis viverra nibh cras pulvinar mattis. Convallis aenean et tortor at risus viverra adipiscing at in. Porta non pulvinar neque laoreet. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Gravida neque convallis a cras semper auctor. Gravida dictum fusce ut placerat orci. Curabitur vitae nunc sed velit dignissim sodales ut. Tellus orci ac auctor augue mauris augue.</p>
<p>Nibh cras pulvinar mattis nunc sed blandit libero. Dolor morbi non arcu risus quis. Commodo ullamcorper a lacus vestibulum sed arcu non. Gravida rutrum quisque non tellus orci ac auctor. Ornare aenean euismod elementum nisi quis eleifend quam. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Eget arcu dictum varius duis at consectetur lorem donec. Pretium nibh ipsum consequat nisl vel pretium lectus. Aliquam etiam erat velit scelerisque in. Amet venenatis urna cursus eget nunc scelerisque. Lectus mauris ultrices eros in cursus turpis massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Interdum varius sit amet mattis. Facilisi cras fermentum odio eu.</p>
`



</script>