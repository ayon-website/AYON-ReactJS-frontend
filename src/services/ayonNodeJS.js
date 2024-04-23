const endpoints = {
    top5Providers: 'top5Providers',
    top5ProviderCoverage: 'top5ProviderCoverage',
    top5LaunchingRockets: 'top5LaunchingRockets',
    top5GrowingSatellites: 'top5GrowingSatellites'
};

const API_BASE_URL = 'http://localhost:3001';

async function getTop5(type) {
  return fetch(`${API_BASE_URL}/${type}`)
  .then(response => response.json())  // Convert the response data to a string
  .then(data => {
    console.log(data);  
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

async function getTop5Language(language) {
  return fetch(`${API_BASE_URL}/top5ChannelsByLanguage?language=${language}`)
  .then(response => response.json())  
  .then(data => {
    console.log(data);  
    return data.flat();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

async function getNearestToLocation(lat, lowerlim, upperlim) {
  return fetch(`${API_BASE_URL}/nearestToLocation?longitude=${lat}&lowerLim=${lowerlim}&upperLim=${upperlim}`)
  .then(response => response.json())  // Convert the response data to a string
  .then(data => {
    console.log(data);  
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

async function getFilteredChannels(region, satellite, video, language) { 
  return fetch(`${API_BASE_URL}/filteredChannels?region="${region}"&satellite="${satellite}"&video="${video}"&language="${language}"`)
  .then(response => response.json())  // Convert the response data to a string
  .then(data => {
    console.log(data); 
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

export { getTop5, getTop5Language, getNearestToLocation, getFilteredChannels };