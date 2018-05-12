const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userDB"
  // {
  //   // useMongoClient: true
  // }
)

const userSeed = [
  {
    name: "Taqwa",
    skill: "beekeeping",
    location: "Berlin, Germany",
    image: "http://dazedimg.dazedgroup.netdna-cdn.com/700/azure/dazed-prod/1210/9/1219988.jpg"
  },
  {
    name: "Li_C",
    skill: "DJing",
    location: "Rockville, MD",
    image: "http://zeesong.co/wp-content/uploads/2018/04/nicki-minaj-Chun-Li.jpg"
  },
  {
    name: "Maria",
    skill: "Public Speaking",
    location: "Washington, DC",
    image: "https://gramophoneproduction.s3-accelerate.amazonaws.com/s3fs-public/ischia_56_pic-06.jpg"
  },
  {
    name: "Dan",
    skill: "herbologist",
    location: "Arlington, VA",
    image: "https://cdn.vox-cdn.com/thumbor/fLx2YLdc8zdHLiiEzIk0wOFMnfQ=/0x0:2250x3000/1820x1213/filters:focal(752x333:1112x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50868993/114919970.0.jpg"

  },
  {
    name: "Amber",
    skill: "graphic design",
    location: "Centerville, VA",
    image: "http://www.gotceleb.com/wp-content/uploads/photos/amber-heard/the-danish-girl-photocall-in-toronto/Amber-Heard:-The-Danish-Girl-Photocall--04-662x442.jpg"
  },
  {
    name: "Taqwa",
    skill: "beekeeping",
    location: "Berlin, Germany",
    image: "https://timedotcom.files.wordpress.com/2014/04/beyonce-knowles-time-100-feat.jpg"
  },
  {
    name: "JC",
    skill: "programing",
    location: "Berlin, Germany",
    image: "http://images.fanpop.com/images/image_uploads/JC-Promo-Pics-jc-chasez-584557_391_433.jpg"
  },
  {
    name: "Nathan",
    skill: "Instructing",
    location: "Berlin, Germany",
    image: "https://voguetheatre.com/wp-content/uploads/2017/07/Nathan-Fielder-approved-photo-2-2017.jpg"
  },
  {
    name: "God",
    skill: "Goding",
    location: "Berlin, Germany",
    image: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1493394020/articles/2016/03/21/morgan-freeman-on-religion-science-and-the-story-of-god/160229-sponsor-morgan-tease_i51hm1"
  },
  {
    name: "Trump",
    skill: "BS-ing",
    location: "Berlin, Germany",
    image: "https://static.politico.com/dims4/default/527634b/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Ff2%2F86%2Fc8a5fca043eeb0ccf6decee47992%2F15-donald-trump-46-ap-1160.jpg"
  },
  {
    name: "Chad",
    skill: "Fitness",
    location: "Berlin, Germany",
    image: "https://s3.favim.com/610/140524/black-and-white-diego-barrueco-face-guy-Favim.com-1784463.jpg"
  },
  {
    name: "Betty",
    skill: "Interior Design",
    location: "Berlin, Germany",
    image: "https://i.kinja-img.com/gawker-media/image/upload/s--SRpysUG_--/c_scale,f_auto,fl_progressive,q_80,w_800/efcgwdjlpziwopqpolq4.jpg"
  },
  {
    name: "Jesus",
    skill: "Lording",
    location: "Berlin, Germany",
    image: "https://i.imgur.com/jjSsRSI.jpg"
  },
  {
    name: "Naruto",
    skill: "Ninjistu",
    location: "Berlin, Germany",
    image: "https://pmcvariety.files.wordpress.com/2015/07/naruto_movie-lionsgate.jpg?w=1000&h=563&crop=1"
  },
  {
    name: "Michael Avenatti",
    skill: "Lawyer",
    location: "Berlin, Germany",
    image: "https://s1.r29static.com//bin/entry/14e/680x816,80/1965386/image.jpg"
  },
  {
    name: "Karl Marx",
    skill: "Communism",
    location: "Berlin, Germany",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Karl_Marx.jpg"
  },
  {
    name: "John Rawls",
    skill: "Capitalism",
    location: "Berlin, Germany",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/John_Rawls.jpg"
  },
  {
    name: "Patrick",
    skill: "APIs",
    location: "Berlin, Germany",
    image: "https://ih0.redbubble.net/image.488950703.5585/flat,800x800,075,f.u3.jpg"
  },
  {
    name: "Elon Musk",
    skill: "Entrepreneurship",
    location: "Berlin, Germany",
    image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxOTUyMDE0ODYx/elon-musk-20837159-1-402.png"
  },
  {
    name: "Noam Chomsky",
    skill: "Linguistics",
    location: "Berlin, Germany",
    image: "https://chomsky.info/wp-content/uploads/NoamChomsky.jpg"
  },
  {
    name: "Janet Mock",
    skill: "Queer Theory",
    location: "Berlin, Germany",
    image: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F06%2Fjanet-mock.jpg%3Fw%3D450&w=1600&q=70"
  },
  {
    name: "Naomi Wolf",
    skill: "Third Wave Feminism",
    location: "Berlin, Germany",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Naomi_wolf_2012.jpg"
  },
  {
    name: "The Rock",
    skill: "Wrestling",
    location: "Berlin, Germany",
    image: "https://hips.hearstapps.com/hmg-dev.s3.amazonaws.com/images/701/dwayne-the-rock-johnson-evolution-1518551020.jpg?resize=980:*"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data);
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
