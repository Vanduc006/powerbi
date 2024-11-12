import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
const Tutor = () => {
  return (
    <div>
    <Card className='p-4'>
        <CardTitle>Overviews</CardTitle>
        <p className='mt-4'>
        This tutorial will guide you on how to effectively use the Power BI dashboard hosted on our website. This Power BI dashboard provides a comprehensive analysis of industry distributions across Sydney, broken down into four distinct sections: Main Dashboard, Objective 1, Objective 2, and Objective 3. Each section is designed to highlight key insights related to industry trends, geographic concentration, and economic profiling over time. 
        </p>
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Main Dashboard</CardTitle>
        <p className='mt-4'>
        This section serves as an overview and quick summary of the industry data.
        </p>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/tutor/1.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        />
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Key Features</CardTitle>
        <p className='mt-4'>
        KPI Tiles:
        Total Industry (525): Displays the total number of industries analysed. <br/>
            <span className='ml-4'></span>•	Total Villages (10): Indicates the number of distinct villages covered in the dataset.<br/>
            <span className='ml-4'></span>•	Total Groups (65K): Shows the total count of grouped industry classifications.<br/>
        Map Visualization:<br/>
            <span className='ml-4'></span>•	Interactive map displaying industry locations based on latitude and longitude.<br/>
            <span className='ml-4'></span>•	Data points are color-coded by industry classification for easy identification.<br/>
            <span className='ml-4'></span>•	Hover over the map points to view detailed information about each business.<br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/2.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        />
        Filters:<br/>
        <span className='ml-4'></span>•	Year: Select from 2007, 2012, or 2017 to analyse the trends over time.<br/>
        <span className='ml-4'></span>•	Village: Filter by specific villages such as "CBD & Harbour" or "King Street" to refine the data view.<br/>
        <span className='text-[#156082]'>Example: Filter “CBD & Harbour” in 2017</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/3.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        How to Use:<br/>
        <span className='ml-4'></span>•	Use the Year filter to observe changes in industry distributions across different years.<br/>
        <span className='ml-4'></span>• Apply the Village filter to zoom in on specific regions and see the concentration of industries there.<br/>
        <span className='ml-4'></span>•	Analyse the Top 5 Industries Bar Chart to identify the most prevalent sectors in the selected area and year.<br/>
        <span className='ml-4'></span>•	Utilise the Map Visualization to spot clusters and industry hotspots within Sydney.<br/>

        </p>

    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Objective 1</CardTitle>
        <p className='mt-4'>
        Focuses on division-level analysis to understand how industries are distributed across different divisions and regions.
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/4.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        />
        Visualizations:<br/>
        <span className='ml-4'></span>•	Line Chart: Displays the count of Division Codes across different years, broken down by Division Name.<br/>
        <span className='ml-4'></span>•	Bar Chart: Shows the count of Sub-Division Codes by village and year.<br/>
        <span className='ml-4'></span>•	Pie Charts:<br/>
        <span className='ml-8'></span>(a). Provides a breakdown of Sub-Division Codes by Division Name and year.<br/>
        <span className='ml-8'></span>(b). Highlights the distribution of industries within specific divisions over time.<br/>
        How to Use:<br/>
        <span className='ml-4'></span> •	Use the Year filter to compare industry growth across different periods (2007, 2012, 2017).<br/>
        <span className='ml-4'></span>•	The Line Chart helps identify industry trends, such as the rise or decline of specific divisions like "Retail Trade" or "Professional Services."<br/>
        <span className='ml-4'></span>•	The Bar Chart reveals which villages have higher concentrations of particular industries.<br/>
        <span className='ml-4'></span>•	Analyse the Pie Charts to understand the proportional distribution of industries within divisions.<br/>

        </p>
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Objective 2</CardTitle>
        <p className='mt-4'>
        This section dives deeper into the analysis of subdivisions within industries, providing insights into specific sectors and their regional presence.
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/5.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        />
        Visualizations:<br/>
        <span className='ml-4'></span>•	Bar and Line Charts:<br/> 
        <span className='ml-8'></span>(a). Show trends in Sub-Division Codes by year and region.<br/>
        <span className='ml-8'></span>(b). Highlight shifts in industry focus within specific villages.<br/>
        <span className='ml-4'></span>•	Pie Charts:<br/>
        <span className='ml-8'></span>(a). Illustrate the breakdown of Sub-Division Codes and their contributions to overall industry growth.<br/>
        <span className='ml-8'></span>(b). Allow comparisons between different subdivisions like "Food Services," "Financial Services," etc.<br/>
        How to Use:<br/>
        <span className='ml-4'></span>•	Apply the Year filter to observe how different subdivisions have grown or declined over time.<br/>
        <span className='ml-4'></span>•	The Bar Chart helps identify which villages have seen an increase in specific sectors like "Accommodation" or "Healthcare."<br/>
        <span className='ml-4'></span>•	Utilize the Pie Charts to explore the distribution of businesses within subdivisions, identifying dominant sectors.<br/>
        <span className='text-[#156082]'>Example: Apply the filter “Professional, Scientific and Technical Services” in the pie chart and 2012 in the year.</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/6.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        </p>
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Overviews</CardTitle>
        <p className='mt-4'>
        Provides a detailed comparison of Sub-Division data, focusing on specific industries across villages and timeframes.<br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/7.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        Visualizations:<br/>
        <span className='ml-4'></span>•	Line Graph: Shows trends in the count of Sub-Division Codes over the years, allowing users to see the rise or fall of industries.<br/>
        <span className='ml-4'></span>•	Stacked Bar Chart:<br/>
        <span className='ml-8'></span>(a). Illustrates the count of Sub-Division Codes by village.<br/>
        <span className='ml-8'></span>(b). Highlights which regions have diversified or specialized in particular industries.<br/>
        <span className='ml-4'></span>•	Donut Chart: Breaks down the data by Sub-Division Name, highlighting which subdivisions dominate in certain areas.<br/>
        How to Use:<br/>
        <span className='ml-4'></span>1.	Use the Year filter to analyse changes over time, focusing on how industry subdivisions have shifted.<br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/8.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        <span className='text-[#156082]'>e.g. Apply year filter “2017”.</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/9.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        <span className='ml-4'></span>2.	Apply the Village filter to zoom in on specific areas to understand localized industry trends. <br/>
        <span className='text-[#156082]'>E.g. Select village “CBD & Harbour”</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/10.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        <span className='ml-4'></span>3.	The Bar Chart reveals which areas have a concentration of the particular industry subdivisions, assisting in identifying business opportunities.<br/>
        <span className='ml-4'></span>4.	Hover on the map and the pie chart can see the detail information about that classification of the industries.<br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/11.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        <span className='ml-4'></span>5.	Select the classification name in the pie chart to analyse how that classification of the industries distributes over years and village.<br/>
        <span className='text-[#156082]'>e.g. Difference between distribution of legal service in Chinatown in 2012 and 2017</span><br/> 
        <span className='text-[#156082]'>In 2012:</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/12.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        <span className='text-[#156082]'>In 2017:</span><br/>
        <img
        src='https://myfdqawmzovlouhecepo.supabase.co/storage/v1/object/public/powerbi/8.png'
        alt="somthing went wrong when server try to load this image. Please double check the link image"
        className="object-cover rounded-[12px] mt-5 border-black border-2 border-solid"
        /><br/>
        </p>
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>General Tips for Maximizing the Dashboard</CardTitle>
        <p className='mt-4'>
        •	Cross-Filtering: Clicking on a bar, slice, or data point in one visualization will dynamically filter related visuals on the slide.<br/>
        •	Reset Filters: If you want to reset all selections, use the "Clear Filters" button in the filters pane.<br/>
        •	Exporting Data: To export data for further analysis, click on the "More options" (three dots) in any visual and select "Export data."<br/>
        </p>
    </Card>
    <Card className='p-4 mt-4'>
        <CardTitle>Conclusion</CardTitle>
        <p className='mt-4'>
        This dashboard serves as a powerful tool for analysing industry distributions, spotting business trends, and supporting strategic planning in Sydney. By utilizing its interactive features, users can uncover valuable insights into how industries are distributed geographically and how they evolve over time.
        </p>
    </Card>
    </div>
  )
}

export default Tutor