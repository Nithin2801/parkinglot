// const submitBtn = document.getElementById('submit-btn')
// const container = document.getElementById('container');
// const detailsBox  =document.getElementById('details-box');
// console.log(detailsBox);

// submitBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const ownerName = document.getElementById('owner-name').value;
//     const vechicleName = document.getElementById('vechicle-name').value;
//     const vechicleNum = document.getElementById('vechicle-num').value;
//     const entryDate = document.getElementById('entry-date').value;
//     const exitDate = document.getElementById('exit-date').value;
//     if(ownerName === ""){
//         alert("yes we got it!");
//         return 0;
//     }
//     const listItem = document.createElement('li');
//     listItem.style.listStyleType = "none";
//     listItem.style.marginLeft="20px";
//     console.log(listItem);
//     listItem.innerText = `${ownerName}  ${vechicleName}  ${vechicleNum}  ${entryDate}  ${exitDate}`;
//     const removeBtn = document.createElement('button');
//     removeBtn.style.marginLeft="10px"
//     removeBtn.innerText = "Remove";
//     listItem.append(removeBtn);
//     detailsBox.append(listItem);
//     removeBtn.addEventListener('click',()=>{
//         listItem.remove();
//     })
//     document.getElementById('owner-name').value = '';
//     document.getElementById('vechicle-name').value = '';
//     document.getElementById('vechicle-num').value='';
    
// })


const submitBtn = document.getElementById('submit-btn');
const detailsBox = document.getElementById('details-box');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const ownerName = document.getElementById('owner-name').value;
    const vechicleName = document.getElementById('vechicle-name').value;
    const vechicleNum = document.getElementById('vechicle-num').value;
    const entryDate = document.getElementById('entry-date').value;
    const exitDate = document.getElementById('exit-date').value;

    if (ownerName === "") {
        alert("Please enter the owner's name.");
        return;
    }

    // Create a new row
    const row = document.createElement('tr');

    // Create cells for each data point
    const ownerNameCell = document.createElement('td');
    ownerNameCell.innerText = ownerName;
    const vechicleNameCell = document.createElement('td');
    vechicleNameCell.innerText = vechicleName;
    const vechicleNumCell = document.createElement('td');
    vechicleNumCell.innerText = vechicleNum;
    const entryDateCell = document.createElement('td');
    entryDateCell.innerText = entryDate;
    const exitDateCell = document.createElement('td');
    exitDateCell.innerText = exitDate;

    // Create a cell for the remove button
    const actionsCell = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener('click', () => {
        row.remove();
    });
    actionsCell.append(removeBtn);

    // Append cells to the row
    row.append(ownerNameCell, vechicleNameCell, vechicleNumCell, entryDateCell, exitDateCell, actionsCell);

    // Append the row to the table body
    detailsBox.append(row);

    // Clear the input fields
    document.getElementById('owner-name').value = '';
    document.getElementById('vechicle-name').value = '';
    document.getElementById('vechicle-num').value = '';
    document.getElementById('entry-date').value = '';
    document.getElementById('exit-date').value = '';
});
