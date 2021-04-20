const sampleimage = document.querySelector('#sampleimage');

const technique = document.querySelector('#technique');

technique.addEventListener('input', updateSampleImage());

function updateSampleImage() {
  console.log(technique.value);
  sampleimage.src = 'pix/sampleimage-' + technique.value + '.jpg';
}
