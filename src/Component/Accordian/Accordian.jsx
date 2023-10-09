
const Accordian = () => {
   return (
      <div className="mt-36">
         <h1 className="text-4xl text-center mb-4 font-bold">Frequently Asked Questions</h1>
         <p className="md:w-3/5 md:text-center mx-auto">Discover the connection between physical activity and heart health, and find out how regular exercise can significantly reduce the risk of heart diseases.</p>
         <div className="collapse collapse-plus bg-base-200 mt-12">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
               Can I book appointment behalf of someone else?
            </div>
            <div className="collapse-content">
               <p>Discover the connection between physical activity and heart health, and find out how regular exercise can significantly reduce the risk of heart diseases.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               Do I need a refferal to see a Physiotherapist?
            </div>
            <div className="collapse-content">
               <p>Discover the connection between physical activity and heart health, and find out how regular exercise can significantly reduce the risk of heart diseases.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               Do you have vanue options for appointment
            </div>
            <div className="collapse-content">
               <p>Discover the connection between physical activity and heart health, and find out how regular exercise can significantly reduce the risk of heart diseases.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               What if I have more questions that are not answered here?
            </div>
            <div className="collapse-content">
               <p>Discover the connection between physical activity and heart health, and find out how regular exercise can significantly reduce the risk of heart diseases.</p>
            </div>
         </div>
      </div>
   );
};

export default Accordian;