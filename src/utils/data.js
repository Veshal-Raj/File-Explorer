export const data = [
    {
        id: 1,
        name: 'README.md',
    },
    {
        id: 2,
        name: 'Documents',
        children: [
            {
                id: 3,
                name: 'Word.doc',
            },
            {
                id: 4,
                name: 'Powerpoint.ppt',
                children: [
                    {
                        id: 16,
                        name: 'unnamed.txt',
                       },
                       {
                           id: 17,
                           name: 'Misc',
                           children: [
                               {
                                   id: 18,
                                   name: 'foo.txt',
                               },
                               {
                                   id: 19,
                        name: 'bar.txt',
                      },
                   ],
               },
           ],
            },
        ],
    },
    {
        id: 5,
        name: 'Downloads',
        children: [
            {
                id: 6,
                name: 'unnamed.txt',
                },
                {
                    id: 7,
                    name: 'Misc',
                    children: [
                        {
                            id: 8,
                            name: 'foo.txt',
                        },
                        {
                            id: 9,
                name: 'bar.txt',
            },
            ],
        },
        ],
    },
];
