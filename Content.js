import pic from "./ProfilePic.jpg";

export default function Content({ blog }) {
  return (
    <>
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              {blog.title}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">{blog.name}</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src={pic}
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">{blog.content}</p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">{blog.date}</dd>
          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </>
  );
}
