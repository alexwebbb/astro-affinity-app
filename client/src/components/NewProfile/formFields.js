const defaultImages = [
  "https://res.cloudinary.com/execool/image/upload/v1536749354/astro-app/cats/clark-young-412037-unsplash.jpg",
  "https://res.cloudinary.com/execool/image/upload/v1536749354/astro-app/cats/erik-jan-leusink-573464-unsplash.jpg",
  "https://res.cloudinary.com/execool/image/upload/v1536749354/astro-app/cats/andrew-brandy-802749-unsplash.jpg",
  "https://res.cloudinary.com/execool/image/upload/v1536749353/astro-app/cats/michael-sum-565770-unsplash.jpg"
];

export default [
  { label: "Name", name: "name", fieldType: "text" },
  { label: "Date of Birth", name: "birthdate", fieldType: "date" },
  { label: "Description", name: "description", fieldType: "textarea" },
  {
    label: "Image Url",
    name: "image",
    fieldType: "text",
    defaultValue: () => {
      return defaultImages[Math.floor(Math.random() * defaultImages.length)];
    }
  }
];
