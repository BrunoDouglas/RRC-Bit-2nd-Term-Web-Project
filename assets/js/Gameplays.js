/*
 * Sets up the Event listener to the Submit event of the Submit Your Video form
 */
function Gameplays()
{
	var xml = loadXML("videos.xml");

	var clips = xml.getElementsByTagName("Clip");

	for (var i = 0; i < clips.length; i++) 
	{
		var title = clips[i].getElementsByTagName("Title")[0].firstChild.nodeValue,
			URL	  = clips[i].getElementsByTagName("URL")[0].firstChild.nodeValue,
			description = clips[i].getElementsByTagName("description")[0].firstChild.nodeValue;

		var elementLi = document.createElement("li");
		var elementTitle = document.createElement("h3");
		    elementTitle.innerHTML = title;

		

		var elementVideo = document.createElement("iframe");
		elementVideo.setAttribute("width","640");
		elementVideo.setAttribute("height","360");
		elementVideo.setAttribute("frameborder","0");
		elementVideo.setAttribute("style","position:absolute;width:100%;height:100%;left:0");
		elementVideo.setAttribute("allowfullscreen","");
		elementVideo.setAttribute("src","https://www.youtube.com/embed/"+URL+"?rel=0&amp;showinfo=0?ecver=2");


		var elementVideoDiv = document.createElement("div");
		elementVideoDiv.setAttribute("class","video");

		elementVideoDiv.appendChild(elementVideo)

		var elementDescription = document.createElement("p");
		elementDescription.setAttribute("class","description");
		elementDescription.innerHTML = description;


		elementLi.appendChild(elementTitle);
		elementLi.appendChild(elementVideoDiv);
		elementLi.appendChild(elementDescription);

		var elementUL = document.getElementsByClassName("video-thumbs")[0];

		elementUL.appendChild(elementLi);	

	}
}

