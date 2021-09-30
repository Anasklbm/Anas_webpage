/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    

    {
        title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
        authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup2",
        image : "assets/images/research-page/crossLingual.png",
        citation: {
            vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2"
    },

    {
        title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
        authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup3",
        image : "assets/images/research-page/wordRepresentation.png",
        citation: {
            vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "absPopup3"
    },

    {
        title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
        authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup4",
        image : "assets/images/research-page/dialogueState.png",
        citation: {
            vancouver: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 4",
        absbox: "absPopup4"
    },

    

    {
        title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
        authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "popup7",
        image : "assets/images/research-page/imageDecomposition.png",
        citation: {
            vancouver: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 7",
        absbox: "absPopup7"
    },
    
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

