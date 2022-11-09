import rerender from '../../render';

let state = {
  filterData: [
    {
      id: 1,
      imgUrl: 'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg',
      text: 'Library',
    },
    {
      id: 2,
      imgUrl:
        'https://res.cloudinary.com/bloomsbury-publishing-public/image/upload/f_auto,q_auto/BPM/Static/Music%20and%20Sound/equalizer-153212_12801.png',
      text: 'Acoustic Hits',
    },
    {
      id: 3,
      imgUrl:
        'https://legismusic.com/wp-content/uploads/2016/09/musica-electronica-sin-copyright-1.jpg',
      text: 'Electronic',
    },
    {
      id: 4,
      imgUrl:
        'https://imgs.classicfm.com/images/35606?width=5760&crop=16_9&signature=7t4IOpHgxLgZGdUyYBavQ_kZDE4=',
      text: 'Romantic',
    },
    {
      id: 5,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQkC6lMVS41DXNrN1ztd5wgbtkxMcme_doQ&usqp=CAU',
      text: 'Hip Hop',
    },
    {
      id: 6,
      imgUrl: 'https://0.soompi.io/wp-content/uploads/2016/10/20010154/BTS2.jpg?s=900x600&e=t',
      text: 'Global Top',
    },
  ],
  CategoryData: [
    {
      imgUrl:
        'https://img.etimg.com/thumb/msid-73612807,width-650,imgsize-212384,,resizemode-4,quality-100/vinyl-records_istock.jpg',
      text: 'Old is Gold',
    },
    {
      imgUrl: 'https://i.scdn.co/image/ab67706c0000bebb81b02b2a589b6fd6284c1054',
      text: 'Pop Hits',
    },
    {
      imgUrl:
        'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDkxNzA3MjAxODg5NjQw/100-best-rock-songs-of-the-90s.jpg',
      text: "90's Hits",
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/african-jazz-musician-playing-the-saxophone-picture-id465732100?k=20&m=465732100&s=612x612&w=0&h=ybE66iDarLGktmFEga_gZ5xlUxPMuB7uK3GYmbgkZh0=',
      text: 'Jazz Music',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyibnHzbDWmBr2bN-IvE4hD4x7x5mQrnIt7w&usqp=CAU',
      text: 'Hard Rok',
    },
    {
      imgUrl:
        'https://cdn.lifehack.org/wp-content/uploads/2015/11/03115353/10838430745_70da469b0b_k.jpg',
      text: 'Underground',
    },
  ],
  LibraryData: [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN32ljmb9fl34ucmnO_-4-Hr9GEml_nl6mZHsK-Rmh2G3Y04egtHXYNXrWL1m5QenG8Ek&usqp=CAU',
      text: 'Liked',
    },
    {
      id: 2,
      imgUrl:
        'https://thumbs.dreamstime.com/b/favourite-music-button-app-development-amazing-favourite-button-placed-over-violet-gradient-image-useful-music-148676444.jpg',
      text: 'Favourite',
    },
    {
      id: 3,
      imgUrl:
        'https://images.squarespace-cdn.com/content/v1/5c52add271069943f80a4056/c75075ac-0b76-4e8f-baa3-7aa933ca3a1b/music-head-shake.gif',
      text: 'Nice Music',
    },
    {
      id: 4,
      imgUrl:
        'https://media.istockphoto.com/vectors/rock-sign-gesture-with-lightning-for-your-design-vector-id1183921035?k=20&m=1183921035&s=612x612&w=0&h=No2Ez2fPgiaDu1RiGywo5kF38g_r26g5ZDq1WuBml6w=',
      text: 'My Rock',
    },
  ],
  SearhPage: {
    musicSerchTypeData: [
      {
        id: '1',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOc0RwkVdeoAW2c6NkTUnell0nlPV-bhRp2AN_mHyzJIyV015HVa8No8qr6AufNeh6GM&usqp=CAU',
        text: 'Rock and Roll',
      },
      {
        id: '2',
        imgUrl: 'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg',
        text: 'Punk Rok',
      },
      {
        id: '3',
        imgUrl:
          'https://t4.ftcdn.net/jpg/03/67/02/71/360_F_367027157_IgeJDDKGow9Iyz1lSR0wrRR4EwclL7hT.jpg',
        text: 'Heavy Metal',
      },
      {
        id: '4',
        imgUrl:
          'https://i0.wp.com/vintageheavymetal.com/wp-content/uploads/2018/05/80s-Heavy-Metal-Concert-Audience-Metal-Horns.jpg',
        text: 'Hard Rock',
      },
    ],
    catSerchNameData: [
      {
        id: '1',
        imgUrl:
          'https://www.goethe.de/resources/files/jpg954/header-bruno-emmanuelle-gi6-m_t_w-e-unsplash1-formatkey-jpg-w320r.jpg',
        text: 'Electronic',
      },
      {
        id: '2',
        imgUrl:
          'https://tomhess.net/files/images/BackUpPlanForMusicians/Music-Career-Backup-Plans.png',
        text: 'Rainy Roads',
      },
      {
        id: '3',
        imgUrl:
          'https://www.magix.com/fileadmin/user_upload/Produkte/Musik/Music_Maker_2020/Content_Editions/i_560455/music-maker-edm-edition-header-mobile-int.jpg',
        text: 'EDM',
      },
    ],
    musicSerchCategoryData: [
      {
        id: '1',
        imgUrl: 'https://cdn3.vectorstock.com/i/1000x1000/78/77/music-party-vector-267877.jpg',
        text: 'Party Mix',
      },
      {
        id: '2',
        imgUrl:
          'https://besthqwallpapers.com/Uploads/20-4-2017/15307/thumb2-dj-night-club-dj-console-concert-musician.jpg',
        text: 'DJ Mix',
      },
      {
        id: '3',
        imgUrl: 'https://nationaltoday.com/wp-content/uploads/2021/10/Pop-Music-Chart-Day.jpg',
        text: 'POP Mix',
      },
      {
        id: '4',
        imgUrl:
          'https://images.saymedia-content.com/.image/t_share/MTc0NDkxNzA3MjAxODg5NjQw/100-best-rock-songs-of-the-90s.jpg',
        text: 'Rok Mix',
      },
      {
        id: '5',
        imgUrl: 'https://www.careersinmusic.com/wp-content/uploads/2019/11/study-jazz.jpg',
        text: 'Your Jazz',
      },
      {
        id: '6',
        imgUrl:
          'https://static.displate.com/857x1200/displate/2020-04-17/f1df5457fe7d95933dd77c9498fa54a4_c3733e09b0da276f695a2a38c739a894.jpg',
        text: 'Techno Mix',
      },
    ],
  },
};

export let createNewPlaylist = (NewPlaylist) => {
  let newPlaylist = {
    id: 5,
    imgUrl:
      'https://static.vecteezy.com/system/resources/previews/002/238/014/original/playlist-icon-on-white-line-vector.jpg',
    text: NewPlaylist,
  };
  state.LibraryData.push(newPlaylist);
  console.log(state.LibraryData);
  rerender(state);
};

export default state;
