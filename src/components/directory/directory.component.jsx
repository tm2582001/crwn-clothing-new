import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const categories = [
  {
    title: "hats",
    // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    imageUrl: "/images/hats.png", // local file in public/images/
    id: 1,
    route: "shop/hats",
  },
  {
    title: "jackets",
    // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    imageUrl: "/images/jackets.png", // local file in public/images/
    id: 2,
    route: "shop/jackets",
  },
  {
    title: "sneakers",
    // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    imageUrl: "/images/sneakers.png", // local file in public/images/
    id: 3,
    route: "shop/sneakers",
  },
  {
    title: "womens",
    // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    imageUrl: "/images/womens.png", // local file in public/images/
    size: "large",
    id: 4,
    route: "shop/womens",
  },
  {
    title: "mens",
    // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    imageUrl: "/images/men.png", // local file in public/images/
    size: "large",
    id: 5,
    route: "shop/mens",
  },
];

const Directory = ()=>{
    return(
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category= {category} />
      ))}
    </div>);
};

export default Directory;