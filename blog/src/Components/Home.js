import React from 'react';
import Header from './Header';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Home() {
  const articles = {
    how2: [
      { img: 'https://rajtech.info/mycmoofi/2025/02/WhatsApp-Payment-Option-Not-Showing-on-iPhone-1000x600.jpg', title: 'WhatsApp Payment Option Not Showing On iPhone? Here’s How To Fix It!' },
      { img: 'https://rajtech.info/mycmoofi/2024/12/featured-image-raj-tech-1000x600.jpg', title: 'What’s Coming For Apple Lovers In 2025? Full List By Raj Tech' },
      { img: 'https://rajtech.info/mycmoofi/2024/11/featured-image-1000x600.jpg', title: 'Simple Steps To Customize iMessage Profile On Your Apple Devices (iPhone Or iPad)' },
      { img: 'https://rajtech.info/mycmoofi/2024/07/Know-to-Find-Your-Lost-AirPods-in-any-Conditions-1000x600.jpg', title: 'Know To Find Your Lost AirPods In Any Conditions - Raj Tech Blog' },
      { img: 'https://rajtech.info/mycmoofi/2024/06/Clean-UP-Tool-Remove-Any-Objects-From-Images-1000x600.jpg', title: 'Clean UP Tool Removes Any Objects From Photos On IOS 18' },
      { img: 'https://rajtech.info/mycmoofi/2024/06/AirDrop-not-working-on-my-iPad-iPhone-or-Mac-1000x600.jpg', title: 'AirDrop Not Working On My iPhone, iPad, Or Mac? 10 Ways To Resolve Your Issues' },
    ],
    blogging: [
      { img: 'https://rajtech.info/mycmoofi/2023/02/Pay-Per-Click-Advertising-1000x600.jpg', title: 'The Beginner’s Guide To Pay-Per-Click Advertising & Know What Is It?' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/blogspot.com_-1000x600.jpg', title: 'How To Use Blogspot.Com Or Google Blogger.Com For Effective Blogging' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/wix-1000x600.jpg', title: 'Wix: The All-In-One Website Building Solution In One Place' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/joomla-1000x600.jpg', title: 'Discover The Power Of Joomla: A Comprehensive Guide' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/magento-1000x600.jpg', title: 'Magento: An Introduction To The Open-Source E-Commerce Platform' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/shopify-1000x600.jpg', title: 'Shopify – The Complete E-Commerce Platform For Building And Growing Your Online Store' },
    ],
  };


  const cards = [
    {
      image: '	https://rajtech.info/mycmoofi/2023/08/capcut-template-new-trend-1000x600.jpg',
      title: 'Capcut Temple New Trend:',
      text: 'Enhance Your Videos With Capcut New Template',
    },
    {
      image: '	https://rajtech.info/mycmoofi/2023/02/Optimizing-Your-Videos-for-SEO-1000x600.jpg',
      title: 'The Ultimate Guide To Video SEO:',
      text: 'How To Optimize Your Videos For Search',
    },
    {
      image: 'https://rajtech.info/mycmoofi/2023/02/video-editing-mistakes-1000x600.jpg',
      title: 'Don’t Make These Mistakes:',
      text: 'Common Vlog Editing Mistakes To Avoid',
    },
    {
      image: '	https://rajtech.info/mycmoofi/2023/02/vlog-editing-tips-tricks-1000x600.jpg',
      title: 'Vlog Editing Tips And Tricks',
      text: 'For Creating Amazing Content',
    },
    {
      image: 'https://rajtech.info/mycmoofi/2023/02/youtube-shorts-1000x600.jpg',
      title: 'All You Need To Know About YouTube Shorts:',
      text: 'The Newest Short-Form Video Platform',
    },
  ];

  const posts = [
    {
      title: 'Dogiators? How To Earn Real Money By Playing Telegram Games?',
      img: 'https://rajtech.info/mycmoofi/2024/09/dogiators-1-1000x600.jpg',
    },
    {
      title: 'Today! Apple App & Games Gone FREE FREE | Raj Tech',
      img: 'https://rajtech.info/mycmoofi/2024/06/Apple-Apps-FREE-Gone-Today-On-The-App-Store-1000x600.jpg',
    },
    {
      title: 'App Has Become Totally FREE On The App $',
      img: 'https://rajtech.info/mycmoofi/2024/06/Apple-Apps-FREE-Gone-Today-On-The-App-Store-1000x600.jpg',
    },
    {
      title: 'ChatGPT Blocked: Sorry, You Have Been Blocked, You Are Unable To Access Auth0.OpenAI.com',
      img: 'https://rajtech.info/mycmoofi/2023/07/chatgpt-blocked.jpg',
    },
  ];


  //  const stories = [
  //   {
  //     title: "Know How To Find Your Lost AirPods In Any Conditions",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpESnfjTXzWjOOxiSzzN-jVMAl3KSQuHVNw&s", // Replace with actual image
  //   },
  //   {
  //     title: "Best 10 Android Mobile Phones in 2023",
  //     image: "https://static.independent.co.uk/2024/09/06/13/Best-android-phones-hero-indybest.jpg?width=1200", // Replace with actual image
  //   },
  //   {
  //     title: "Best 10 Apple iPhone Apps For You",
  //     image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider_modals/environment/modal_trade_in__k5xx81wg61ei_large.jpg", // Replace with actual image
  //   },
  // ];


  const stories = [
    {
      title: "Know How To Find Your Lost AirPods In Any Conditions",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpESnfjTXzWjOOxiSzzN-jVMAl3KSQuHVNw&s",
    },
    {
      title: "Best 10 Android Mobile Phones In 2023",
      img: "https://static.independent.co.uk/2024/09/06/13/Best-android-phones-hero-indybest.jpg?width=1200",
    },
    {
      title: "Best 10 Apple iPhone Apps For You",
      img: "https://www.apple.com/v/iphone/home/cb/images/overview/consider_modals/environment/modal_trade_in__k5xx81wg61ei_large.jpg",
    },
  ];

  const ideas = [
  {
    title: 'From Passion To Profit:',
    subtitle: 'Beginner-Friendly Small Business Ideas',
    image: 'https://your-domain.com/image1.jpg',
  }
];

const inventions = [
  {
    title: 'Know About The Large Hadron Collider With Raj Tech Blog',
    image: 'https://your-domain.com/image2.jpg',
  },
  {
    title: 'How To First Time Controlled Fire In The History Know About',
    image: 'https://your-domain.com/image3.jpg',
  },
  {
    title: 'Stone Tools: Witnesses To Humanity’s Early Ingenuity',
    image: 'https://your-domain.com/image4.jpg',
  }
];



const articles1 = {
    how2: [
      { img: 'https://rajtech.info/mycmoofi/2025/02/WhatsApp-Payment-Option-Not-Showing-on-iPhone-1000x600.jpg', title: 'WhatsApp Payment Option Not Showing On iPhone? Here’s How To Fix It!' }
    ],
    blogging1: [
      { img: 'https://rajtech.info/mycmoofi/2023/02/Pay-Per-Click-Advertising-1000x600.jpg', title: 'The Beginner’s Guide To Pay-Per-Click Advertising & Know What Is It?' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/blogspot.com_-1000x600.jpg', title: 'How To Use Blogspot.Com Or Google Blogger.Com For Effective Blogging' },
      { img: 'https://rajtech.info/mycmoofi/2023/02/wix-1000x600.jpg', title: 'Wix: The All-In-One Website Building Solution In One Place' }
    ],
  };
  

  function ArticleCard({ img, title }) {
    return (
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.97 }}
        className="w-100 h-100"
        style={{ borderRadius: '15px' }}
      >
        <Card className="h-100 d-flex flex-column shadow-sm border-0" style={{ borderRadius: '15px', backgroundColor: 'white' }}>
          <Card.Img
            variant="top"
            src={img}
            style={{
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              width: '100%',
              height: 'auto',
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Text className="fw-bold text-dark mt-auto" style={{ fontSize: '15px' }}>
              {title}
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    );
  }

  return (
    <div>
      <Header />
      <div className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold">
                Get Solutions To All The Problems Of <br />
                Blogging, Vlogging, And Apple Devices In <br />
                The <span className="text-danger">Raj Tech Blog</span>
              </h2>
            </Col>
            <Col md={6}>
              <Row className="g-3">
                {[{ count: '2K', label: 'HOW 2' }, { count: '3M', label: 'READERS' }, { count: '5K', label: 'ARTICLES' }].map((stat, index) => (
                  <Col xs={4} key={index}>
                    <div className="stat-box text-center text-white">
                      <div className="fs-3 fw-bold">{stat.count}</div>
                      <div className="small">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        <style jsx>{`
          .stat-box {
            background-color: black;
            border-radius: 20px;
            padding: 20px 10px;
          }
        `}</style>
      </div>

      {/* Article Sections */}
      <Container fluid className="py-5">
        <Row className="px-5">
          {/* How2 Section */}
          <Col md={6} className="text-white" style={{ backgroundColor: '#111' }}>
            <h4 className="mb-4 mt-2">
              <span role="img" aria-label="question">❓</span>
              <b> How 2– Every Technical Problem Has Solutions</b>
            </h4>
            <Row className="g-4">
              {articles.how2.map((article, idx) => (
                <Col md={4} key={idx} className="d-flex">
                  <ArticleCard {...article} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Blogging Section */}
          <Col md={6}>
            <h4 className="mb-4 mt-2">
              <span role="img" aria-label="feather">🖋</span>
              <b style={{ color: "black", fontSize: "17px" }}>
                Raj Tech Blogging– Explore Your Writing Skills In Front of World
              </b>
            </h4>
            <Row className="g-4">
              {articles.blogging.map((article, idx) => (
                <Col md={4} key={idx} className="d-flex">
                  <ArticleCard {...article} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>






      <Container className="text-center my-5">
      <h2 className="fw-bold">
        Your Problem – <span className="text-dark">Raj Tech Blog</span> Our Solution <span className="text-danger">‘Get Happiness in LiFE’</span>
      </h2>
      <p className="mt-3">
        <strong className="text-danger">Raj Tech</strong> provides you with simple and easy solutions to <strong>technical problems</strong> happening in your life. Also, we offer you with <strong>blogging</strong>, <strong>vlogging</strong>, and <strong>tech news</strong>. So that you get all kinds of help running your business and daily life, it was founded in 2014 by <strong className="text-danger">Raj Chaubey</strong>. This is the official website of <strong className="text-danger">Raj Tech</strong> and beware of fraud.
      </p>

      <div className="d-flex align-items-center justify-content-center my-4">
        {/* <FaVideo size={24} className="text-danger me-2" /> */}
        <span className="fw-bold fs-5">Raj Tech Vlogging– Create Your Own Identity By Making Videos</span>
      </div>

      <Row className="g-4">
  {cards.map((card, idx) => (
    <Col key={idx} xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title className="fw-bold">{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>


   

   <Container fluid className="bg-dark text-white py-4 px-3">
      {/* Header */}
      <div className="text-center mb-4">
        <h5>
          <span role="img" aria-label="news">📰</span> Raj Tech News - Get The Latest News Of Technology Field
        </h5>
      </div>

      {/* Intro */}
      <p className="text-center">
        What going on in the <span className="text-warning fw-bold">tech world</span>? What new thing is coming among you?
        Stay connected with us to get the <span className="text-warning fw-bold">latest tech news</span>.
        Our team works for you to provide you with accurate information about any products and services.
      </p>

      {/* Content */}
      <Row className="mt-4 gx-4">
        {/* Main Article */}
        <Col md={6}>
          <Card className="text-dark rounded-4 overflow-hidden  shadow" style={{width:"500px", left:"100px"}}>
            <Card.Img
              variant="top"
              src="https://rajtech.info/mycmoofi/2024/09/HAMSTER.jpg"
              style={{ objectFit: 'cover', maxHeight: '300px', width:"500px" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-5">
                Hamster Kombat's Latest Price: 0.0000836 Indian Rupees
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar Cards */}
        <Col md={6}>
          <Row className="gy-4">
            {posts.map((post, idx) => (
              <Col sm={6} key={idx}>
                <Card className="text-dark rounded-4 overflow-hidden  shadow d-flex flex-column" style={{width:"300px", right:"100px",height:"200px"}}>
                  <Card.Img
                    variant="top"
                    src={post.img}
                    style={{ objectFit: 'cover', maxHeight: '100px' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Text className="flex-grow-1">{post.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>





<Container className="text-center my-5">
      <h5>
        <span style={{ color: 'red', fontWeight: 'bold' }}>Raj Tech Blog</span>{' '}
        tries to explain every problem of yours in simple words through web stories.
      </h5>
      <p>
        We always try to give you the best content possible. So that you get the best content as per your choice.
      </p>

      <Row className="mt-4">
        {stories.map((story, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card style={{ borderRadius: '20px',width:"400px",height:"400px" }} className="shadow">
              <Card.Img variant="top" src={story.img} style={{ borderRadius: '20px 20px 0 0', height: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Text style={{ fontWeight: 'bold' }}>{story.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>







 <Container fluid className="py-5">
        <Row className="px-5">
          {/* How2 Section */}
          <Col md={6} className="text-white" style={{ backgroundColor: '#111' }}>
            <h4 className="mb-4 mt-2">
              <span role="img" aria-label="question">💡</span>
              <b> Ideas- Make Your Life Change Completely</b>
            </h4>
            <Row className="g-4">
              {articles1.how2.map((article, idx) => (
                <Col md={4} key={idx} className="d-flex" style={{height:"230px"}}>
                  <ArticleCard  {...article} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Blogging Section */}
          <Col md={6}>
            <h4 className="mb-4 mt-2">
              <span role="img" aria-label="feather">🧠</span>
              <b style={{ color: "black", fontSize: "17px" }}>
               
               Inventions- Change The Whole World Lifestyle
              </b>
            </h4>
            <Row className="g-4">
              {articles1.blogging1.map((article, idx) => (
                <Col md={4} key={idx} className="d-flex" >
                  <ArticleCard {...article} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>


      <Footer/>





  


    </div>
  );
}

export default Home;
