import React, { useState } from 'react'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://zfoxaqyxvpeppwsvhrqx.supabase.co";
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpmb3hhcXl4dnBlcHB3c3ZocnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTk3MzgsImV4cCI6MjA3OTI3NTczOH0.lVvS3dQM9P0T44TvLsibOvwEpskWnPv-T7gmZyLpXRU";

const supabase=createClient(supabaseUrl,supabaseKey)
const Upload = () => {
    let[Img, setImg]=useState('null')
    function handlefile(e){
        setImg(e.target.files[0])
        console.log("hii")
    }
    async function save(){
        if(!Img){
            alert("Print an image first");
            return;
        }
           try {
        const { data, error } = await supabase.storage
  .from("insta")
  .upload("insta_images/" + Img.name, Img, { upsert: true });

      if (error) throw error;

      // 2️⃣ Get public URL
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/insta/insta_images/${Img.name}`;
      console.log("Image URL:", imageUrl);

      // 3️⃣ Send metadata to backend
//      await axios.post(
//   "http://localhost:4001/upload",
//   {
//     name: Img.name,
//     ImgUrl: imageUrl,
//     user: localStorage.getItem("userEmail")
//   },
//   {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   }
// );


      alert("✅ Image uploaded and saved successfully!");
      setImg(null);
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert("Error uploading image. Check console for details.");
    }
  
    }

  return (
    <div>
        <input type='file' onChange={handlefile} />
        <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload </button>

    </div>
  )

}
export default Upload;