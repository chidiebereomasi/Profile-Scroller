const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Boston MA',
    image: 'https://xsgames.co/randomusers/assets/avatars/male/59.jpg'
  },

   {
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'Tampa FL',
    image: 'https://xsgames.co/randomusers/assets/avatars/female/59.jpg'
  },

   {
    name: 'John Mark',
    age: 56,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Los Angelos',
    image: 'https://xsgames.co/randomusers/assets/avatars/male/78.jpg'
  },
];

// Init Profile
const profiles = profileIterator(data);

// Call Next Profile
nextProfile();

// Next Profile
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile function
function nextProfile() {
  const currentProfile = profiles.next().values;
  if(currentProfile !== undefined) {
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">
          Name: ${currentProfile.name}
        </li>
        <li class="list-group-item">
          Age: ${currentProfile.age}
        </li>
        <li class="list-group-item">
          Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}
        </li>
        <li class="list-group-item">
          Name: ${currentProfile.location}
        </li>
      </ul>
    `;
  } else {
    // No more profiles (Reload the page)
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { values: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}