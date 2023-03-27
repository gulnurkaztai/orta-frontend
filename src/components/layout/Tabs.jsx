const Tabs = () => {
  return (
    <>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 font-display text-green-100">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg"  type="button" role="tab">Sen üşın</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" role="tab" >Soñğy</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  type="button" role="tab" >Sūranystağy</button>
                </li>
            </ul>
        </div>        
    </>
  )
}
export default Tabs