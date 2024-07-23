const colors = ['Blue', 'Green',  'Red','Purple', 'Yellow'];
        let currentIndex = 0;

        function changeColor() {
            currentIndex = (currentIndex + 1) % colors.length;
            const newColor = colors[currentIndex];
            document.body.style.backgroundColor = newColor.toLowerCase();
            document.getElementById('colorName').textContent = newColor;
            document.getElementById('colorText').style.backgroundColor = newColor.toLowerCase();
            document.getElementById('colorText').style.color = (newColor === 'Yellow' || newColor === 'White') ? 'black' : 'white';
        }