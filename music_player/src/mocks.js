const mock =

  {
    defaultValues: {
      none: {
        slider60: {
          value: 0
        },
        slider310: {
          value: 0
        },
        slider1k: {
          value: 0
        },
        slider6k: {
          value: 0
        },
        slider16k: {
          value: 0
        }
      },
      rock: {
        slider60: {
          value: 0
        },
        slider310: {
          value: 0
        },
        slider1k: {
          value: 0
        },
        slider6k: {
          value: 0
        },
        slider16k: {
          value: 0
        }
      },
      pop: {
        slider60: {
          value: -2
        },
        slider310: {
          value: -2
        },
        slider1k: {
          value: -2
        },
        slider6k: {
          value: -2
        },
        slider16k: {
          value: -2
        }
      },
      jazz: {
        slider60: {
          value: 3
        },
        slider310: {
          value: 3
        },
        slider1k: {
          value: 3
        },
        slider6k: {
          value: 3
        },
        slider16k: {
          value: 3
        }
      },
      classical: {
        slider60: {
          value: 4
        },
        slider310: {
          value: 4
        },
        slider1k: {
          value: 4
        },
        slider6k: {
          value: 4
        },
        slider16k: {
          value: 5
        }
      }
    },
    options: [
      {
        name: 'rock',
        displayName: 'ROCK'
      },
      {
        name: 'jazz',
        displayName: 'JAZZ'
      },
      {
        name: 'pop',
        displayName: 'POP'
      },
      {
        name: 'classical',
        displayName: 'CLASSICAL'
      }
    ],
    decibelRange: [
      -12,
      0,
      +12
    ],
    freqRange: [
      '60',
      '310',
      '1k',
      '6k',
      '16k'
    ]
  };

export default mock;
