const techList = (technologies, name) => technologies.length ?  technologies.map((technologie) => ({tech: technologie, name: name})).sort((a,b) => a.tech.localeCompare(b.tech)) : 'Vazio!';

module.exports = techList;