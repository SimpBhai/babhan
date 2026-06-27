export interface Source {
  label: string
  url: string
}

export interface Section {
  heading: string
  content: string
  subsections?: Array<{
    title: string
    content: string
  }>
}

export interface Card {
  id: number
  title: string
  sections: Section[]
  sources?: Source[]
}

export const deckData: Card[] = [
  {
    id: 1,
    title: 'Space Exploration Overview',
    sections: [
      {
        heading: 'Introduction',
        content: 'Human space exploration has evolved from early rocket programs to modern commercial ventures. This presentation examines key milestones, achievements, and technological advances in space exploration.',
      },
      {
        heading: 'Scope',
        content: 'This deck covers significant developments from the Space Age (1957-present), including manned missions, scientific discoveries, and international cooperation in space programs.',
      },
    ],
    sources: [
      { label: 'NASA History', url: 'https://history.nasa.gov' },
      { label: 'ESA Overview', url: 'https://www.esa.int' },
    ],
  },
  {
    id: 2,
    title: 'Early Space Race',
    sections: [
      {
        heading: 'Sputnik and Early Satellites',
        content:
          'On October 4, 1957, the Soviet Union launched Sputnik 1, the first artificial satellite. This milestone sparked the Space Race between superpowers and accelerated technological development.',
        subsections: [
          {
            title: 'Impact',
            content: 'Led to massive investments in education and technology, particularly in STEM fields.',
          },
          {
            title: 'Timeline',
            content: 'Sputnik 2 (Nov 1957) carried the dog Laika into orbit, demonstrating biological payload capacity.',
          },
        ],
      },
      {
        heading: 'Human Spaceflight Begins',
        content:
          'Yuri Gagarin became the first human in space on April 12, 1961, aboard Vostok 1, orbiting Earth once in 108 minutes.',
      },
    ],
    sources: [
      { label: 'Sputnik 60th Anniversary', url: 'https://history.nasa.gov/sputnik' },
      { label: 'Gagarin Biography', url: 'https://www.esa.int/About_Us/ESA_history' },
    ],
  },
  {
    id: 3,
    title: 'Apollo Program',
    sections: [
      {
        heading: 'Moon Landing Achievement',
        content:
          'Apollo 11, launched on July 16, 1969, successfully landed humans on the Moon. Neil Armstrong and Buzz Aldrin walked on the lunar surface while Michael Collins orbited above.',
        subsections: [
          {
            title: 'Historic Quote',
            content: '"One small step for man, one giant leap for mankind" - Neil Armstrong, July 20, 1969',
          },
          {
            title: 'Scientific Samples',
            content: '382 kg of lunar rocks and soil were collected across Apollo missions for scientific analysis.',
          },
        ],
      },
      {
        heading: 'Apollo Program Success',
        content: 'Six successful moon landings (Apollo 11, 12, 14, 15, 16, 17) between 1969-1972 brought 12 astronauts to the lunar surface.',
      },
    ],
    sources: [
      { label: 'Apollo 11 Mission', url: 'https://science.nasa.gov/mission/apollo-11' },
      { label: 'Moon Landing Evidence', url: 'https://moon.nasa.gov' },
    ],
  },
  {
    id: 4,
    title: 'Space Stations and Shuttles',
    sections: [
      {
        heading: 'Orbital Space Stations',
        content: 'Skylab (1973-1979) was the first US orbital space station. Later, the Mir space station (1986-2001) demonstrated long-term human habitation in space.',
        subsections: [
          {
            title: 'Continuous Presence',
            content: 'The International Space Station (ISS), launched in 1998, has maintained continuous human occupation since November 2000.',
          },
          {
            title: 'Global Cooperation',
            content: 'ISS represents collaboration among NASA, Roscosmos, ESA, JAXA, and CSA.',
          },
        ],
      },
      {
        heading: 'Space Shuttle Era',
        content: 'The Space Shuttle (1981-2011) revolutionized spaceflight with reusable spacecraft, enabling satellite deployment, repairs, and construction projects.',
      },
    ],
    sources: [
      { label: 'ISS Official Page', url: 'https://www.nasa.gov/iss' },
      { label: 'Space Shuttle History', url: 'https://science.nasa.gov/mission/space-shuttle' },
    ],
  },
  {
    id: 5,
    title: 'Modern Space Exploration',
    sections: [
      {
        heading: 'Commercial Space',
        content: 'Private companies like SpaceX, Blue Origin, and Virgin Galactic are transforming space access. Reusable rockets like Falcon 9 have dramatically reduced launch costs.',
        subsections: [
          {
            title: 'Recent Achievements',
            content: 'SpaceX Starship tests, commercial space stations development, and plans for Mars colonization.',
          },
          {
            title: 'Cost Reduction',
            content: 'Launch costs have decreased from $65,000/kg (2010s) to under $5,000/kg with reusable rockets.',
          },
        ],
      },
      {
        heading: 'Scientific Discovery',
        content:
          'Missions like Hubble Space Telescope, James Webb Space Telescope, and Mars rovers continue making groundbreaking discoveries about the universe.',
      },
    ],
    sources: [
      { label: 'SpaceX Achievements', url: 'https://www.spacex.com' },
      { label: 'NASA Missions', url: 'https://science.nasa.gov/missions' },
    ],
  },
  {
    id: 6,
    title: 'Future of Space Exploration',
    sections: [
      {
        heading: 'Artemis Program',
        content: 'NASA Artemis aims to return humans to the Moon by 2025 and establish a sustainable lunar presence as a stepping stone to Mars.',
      },
      {
        heading: 'Mars Exploration',
        content: 'Multiple agencies and companies are planning crewed missions to Mars in the 2030s-2040s. This represents humanity&apos;s next major spaceflight milestone.',
        subsections: [
          {
            title: 'Challenges',
            content: 'Long duration missions, life support systems, radiation protection, and psychological factors must be addressed.',
          },
          {
            title: 'Robotic Precursors',
            content: 'Current Mars rovers and landers (Perseverance, Zhurong) are gathering data for future human missions.',
          },
        ],
      },
    ],
    sources: [
      { label: 'Artemis Program', url: 'https://www.nasa.gov/artemis' },
      { label: 'Mars Planning', url: 'https://mars.nasa.gov' },
    ],
  },
]
