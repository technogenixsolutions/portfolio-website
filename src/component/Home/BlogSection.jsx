import React from 'react';

const BlogSection = () => {
    return (
        <div>
            <div className="from_blog_outer section_ptb">
                <div className="container mx-auto">
                    <div className="text-center pb-16 md:pb-10">
                        <h2 className="text-4xl md:text-6xl from-blog mb-2">From Blog</h2>
                        <p className="text-xl md:text-2xl">Stay Updated with Our Expert Blog Articles</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full lg:w-3/12 px-3 mb-6">
                            <div className="card border-0 mb-3">
                                <img 
                                    src="https://www.aronwebsolutions.com/public/uploads/6576fd88b9a28.webp" 
                                    className="rounded h-full w-full" 
                                    alt="Aron Web Solutions" 
                                     
                                />
                                <div className="card-body py-2">
                                    <h2 className="text-2xl md:text-3xl">The Manifest Crowns Aron Web Solutions as ...</h2>
                                    <p className="card-text">Search Engine Optimization or SEO is one of the b...</p>
                                    <a href="#" className="text-dark pt-0 underline font-medium">Read More</a>
                                </div>
                            </div>
                            <div className="card border-0 mb-3">
                                <img 
                                    src="https://www.aronwebsolutions.com/public/uploads/max_ppc-62.jpg" 
                                    className="rounded h-full w-full" 
                                    alt="pcc" 
                                     
                                />
                                <div className="card-body py-2">
                                    <h2 className="text-2xl md:text-3xl">Maximizing Your PPC Strategy: Key Trends f...</h2>
                                    <p className="card-text">Pay-per-click (PPC) advertis...</p>
                                    <a href="#" className="text-dark pt-0 underline font-medium">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-3 mb-6">
                            <div className="card border-0 h-full">
                                <img 
                                    src="https://www.aronwebsolutions.com/public/uploads/itfirms-62.jpg" 
                                    className="rounded h-full w-full object-cover" 
                                    alt="IT Firm | custom service" 
                                     
                                />
                                <div className="card-body py-2 mb-3">
                                    <h2 className="text-3xl md:text-4xl font-medium">Top IT Firms and Custom Service Providers...</h2>
                                    <p>IT firms and custom service providers play a critical role in today's world by providing businesses with the technolo...</p>
                                    <a href="#" className="text-dark pt-0 underline font-medium">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 px-3 mb-6">
                            <div className="card border-0 mb-3">
                                <img 
                                    src="https://www.aronwebsolutions.com/public/uploads/bigcom_blog-63.jpg" 
                                    className="rounded h-full w-full" 
                                    alt="Bigcommerce | shopify" 
                                     
                                />
                                <div className="card-body py-2">
                                    <h2 className="text-2xl md:text-3xl">Bigcommerce vs Shopify: Choosing the Right...</h2>
                                    <p className="card-text">BigCommerce and Shopify are two of t...</p>
                                    <a href="#" className="text-dark pt-0 underline font-medium">Read More</a>
                                </div>
                            </div>
                            <div className="card border-0 mb-3">
                                <img 
                                    src="https://www.aronwebsolutions.com/public/uploads/ecom_traffic-65.jpg" 
                                    className="rounded h-full w-full" 
                                    alt="Drive Ecommerce" 
                                     
                                />
                                <div className="card-body py-2">
                                    <h2 className="text-2xl md:text-3xl">5 Ways To Drive More E-commerce Website Tr</h2>
                                    <p className="card-text">Are you struggling to drive more traffic to</p>
                                    <a href="#" className="text-dark pt-0 underline font-medium">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
