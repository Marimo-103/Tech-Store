import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, LaptopOutlined } from '@ant-design/icons';

const BreadCrumbs = () => {
  const pathnames = window.location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname) => {
    // Custom logic to convert path segments to meaningful names
    if (pathname === 'laptops') return 'Laptops';
    if (pathname === 'msi-gs-series') return 'MSI GS Series';
    return pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <Breadcrumb className="text-gray-600">
      <Breadcrumb.Item>
        <Link to="/">
          <HomeOutlined />
          <span className="ml-2">Home</span>
        </Link>
      </Breadcrumb.Item>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item key={index}>
            {isLast ? (
              <span>{getBreadcrumbName(pathname)}</span>
            ) : (
              <Link to={routeTo}>
                <LaptopOutlined />
                <span className="ml-2">{getBreadcrumbName(pathname)}</span>
              </Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbs;



// API INTEGRATED BREADCRUMB

// import React, { useEffect, useState } from 'react';
// import { Breadcrumb } from 'antd';
// import { Link } from 'react-router-dom';
// import { HomeOutlined, LaptopOutlined } from '@ant-design/icons';

// const BreadCrumbs = () => {
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
  
//   useEffect(() => {
//     const fetchCategories = async () => {
//       // Simulate fetching from an API
//       const categoryData = await fetchCategoriesAPI();
//       setCategories(categoryData);

//       const subCategoryData = await fetchSubCategoriesAPI();
//       setSubCategories(subCategoryData);
//     };
    
//     fetchCategories();
//   }, []);
  
//   const fetchCategoriesAPI = async () => {
//     // Simulated API response
//     return [
//       { "id": "laptops", "name": "Laptops" },
//       { "id": "desktops", "name": "Desktops" },
//       { "id": "tablets", "name": "Tablets" }
//     ];
//   };

//   const fetchSubCategoriesAPI = async () => {
//     // Simulated API response
//     return [
//       { "id": "msi-gs-series", "name": "MSI GS Series", "categoryId": "laptops" },
//       { "id": "dell-xps", "name": "Dell XPS", "categoryId": "desktops" },
//       { "id": "ipad-pro", "name": "iPad Pro", "categoryId": "tablets" }
//     ];
//   };

//   const pathnames = window.location.pathname.split('/').filter((x) => x);

//   const getCategoryName = (pathname) => {
//     const category = categories.find((cat) => cat.id === pathname);
//     return category ? category.name : pathname;
//   };

//   const getSubCategoryName = (pathname) => {
//     const subCategory = subCategories.find((subCat) => subCat.id === pathname);
//     return subCategory ? subCategory.name : pathname;
//   };

//   return (
//     <Breadcrumb className="text-gray-600">
//       <Breadcrumb.Item>
//         <Link to="/">
//           <HomeOutlined />
//           <span className="ml-2">Home</span>
//         </Link>
//       </Breadcrumb.Item>
//       {pathnames.map((pathname, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//         const isLast = index === pathnames.length - 1;
//         const displayName = index === 0 ? getCategoryName(pathname) : getSubCategoryName(pathname);

//         return (
//           <Breadcrumb.Item key={index}>
//             {isLast ? (
//               <span>{displayName}</span>
//             ) : (
//               <Link to={routeTo}>
//                 <LaptopOutlined />
//                 <span className="ml-2">{displayName}</span>
//               </Link>
//             )}
//           </Breadcrumb.Item>
//         );
//       })}
//     </Breadcrumb>
//   );
// };

// export default BreadCrumbs;






// import React from 'react';
// import { IoIosArrowForward } from 'react-icons/io';

// const BreadCrumbs = () => {
//   const pathnames = window.location.pathname.split('/').filter((x) => x);

//   return (
//     <div>
//       <div className='flex items-center md:gap-1 gap-[2px] md:text-xs text-[9px] text-[#767676] capitalize'>
//         <span>Home</span>
//         {pathnames.map((pathname, index) => (
//           <React.Fragment key={index}>
//             <IoIosArrowForward />
//             <span>{pathname}</span>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BreadCrumbs;
