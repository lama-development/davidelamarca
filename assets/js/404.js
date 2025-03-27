// assets/js/404.js

document.addEventListener('DOMContentLoaded', function () {
    // Elementi del DOM
    const bounceLogo = document.getElementById('bounce-logo');
    const container = document.getElementById('bounce-container');
    const contentElement = document.querySelector('.error-404__content');
    // Ottieni il bottone separatamente per escluderlo dalle collisioni
    const buttonElement = document.querySelector('.error-404__button');

    // Valori iniziali
    let x = 0;
    let y = 0;
    let dirX = 1;
    let dirY = 1;
    const speed = 2;

    // Palette di colori (usare variabili CSS se possibile)
    const pallete = [
        "linear-gradient(45deg, #e124ff, #a01bb6)",
        "linear-gradient(45deg, #ff8800, #e67300)",
        "linear-gradient(45deg, #6a19ff, #4c12b3)",
        "linear-gradient(45deg, #ff2188, #cc1a6d)",
        "linear-gradient(45deg, #00b0ff, #0081cb)",
        "linear-gradient(45deg, #00ff7f, #00cc66)",
        "linear-gradient(45deg, #ffeb3b, #fdd835)",
        "linear-gradient(45deg, #009688, #00796b)"
    ];

    // Indice colore precedente per non ripetere lo stesso colore
    let prevColorChoiceIndex = 0;

    // Dimensioni iniziali
    let logoWidth = bounceLogo.offsetWidth;
    let logoHeight = bounceLogo.offsetHeight;

    // Funzione per ottenere un nuovo colore casuale
    function getNewRandomColor() {
        const currentPallete = [...pallete];
        currentPallete.splice(prevColorChoiceIndex, 1);
        const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
        prevColorChoiceIndex = colorChoiceIndex < prevColorChoiceIndex ?
            colorChoiceIndex : colorChoiceIndex + 1;
        const colorChoice = currentPallete[colorChoiceIndex];
        return colorChoice;
    }

    // Imposta il colore iniziale
    bounceLogo.style.background = pallete[0];
    bounceLogo.style.webkitBackgroundClip = "text";
    bounceLogo.style.backgroundClip = "text";
    bounceLogo.style.webkitTextFillColor = "transparent";

    // Calcola quanto il logo è dentro al contenuto centrale (0-1)
    function getOverlapPercentage() {
        if (!contentElement) return 0;
        
        const contentRect = contentElement.getBoundingClientRect();
        const logoRect = bounceLogo.getBoundingClientRect();
        
        // Trova l'area di sovrapposizione
        const overlapLeft = Math.max(contentRect.left, logoRect.left);
        const overlapRight = Math.min(contentRect.right, logoRect.right);
        const overlapTop = Math.max(contentRect.top, logoRect.top);
        const overlapBottom = Math.min(contentRect.bottom, logoRect.bottom);
        
        // Se non c'è sovrapposizione, ritorna 0
        if (overlapLeft > overlapRight || overlapTop > overlapBottom) {
            return 0;
        }
        
        // Calcola l'area della sovrapposizione
        const overlapArea = (overlapRight - overlapLeft) * (overlapBottom - overlapTop);
        const logoArea = logoRect.width * logoRect.height;
        
        // Ritorna la percentuale di sovrapposizione (capped a 1)
        return Math.min(overlapArea / logoArea, 1);
    }

    // Funzione di animazione
    function animate() {
        // Ottieni dimensioni aggiornate del container e del logo
        const screenHeight = container.clientHeight;
        const screenWidth = container.clientWidth;
        logoWidth = bounceLogo.offsetWidth;
        logoHeight = bounceLogo.offsetHeight;

        // Controlla sovrapposizione con contenuto centrale e applica SOLO effetto dissolvenza
        // NESSUNA collisione con il contenuto centrale
        const overlapPercentage = getOverlapPercentage();
        if (overlapPercentage > 0) {
            // Calcola l'opacità in base alla sovrapposizione - minimo 0.05 (ancora più trasparente)
            const opacity = Math.max(0.05, 1 - (overlapPercentage * 0.95));
            
            // Applica l'effetto di dissolvenza
            bounceLogo.style.opacity = opacity.toString();
            
            // Aggiungi un filtro sfocatura più intenso
            if (overlapPercentage > 0.2) {
                bounceLogo.style.filter = `blur(${overlapPercentage * 4}px)`;
            } else {
                bounceLogo.style.filter = 'none';
            }
            
            // NON cambiare direzione quando c'è sovrapposizione
            // Rimuoviamo il codice che cambia direzione in base alla sovrapposizione
        } else {
            // Riporta l'opacità al massimo quando non c'è sovrapposizione
            bounceLogo.style.opacity = "1";
            bounceLogo.style.filter = 'none';
        }

        // Logica di rimbalzo SOLO sui bordi dello schermo
        // Rimbalzo verticale
        if (y + logoHeight >= screenHeight || y < 0) {
            dirY *= -1;
            bounceLogo.style.background = getNewRandomColor();
            bounceLogo.style.webkitBackgroundClip = "text";
            bounceLogo.style.backgroundClip = "text";
        }

        // Rimbalzo orizzontale
        if (x + logoWidth >= screenWidth || x < 0) {
            dirX *= -1;
            bounceLogo.style.background = getNewRandomColor();
            bounceLogo.style.webkitBackgroundClip = "text";
            bounceLogo.style.backgroundClip = "text";
        }

        // Aggiorna la posizione
        x += dirX * speed;
        y += dirY * speed;

        // Applica la nuova posizione
        bounceLogo.style.left = x + "px";
        bounceLogo.style.top = y + "px";

        // Continua l'animazione
        window.requestAnimationFrame(animate);
    }

    // Gestisci il ridimensionamento della finestra
    window.addEventListener('resize', function () {
        // Assicurati che il logo rimanga all'interno del container
        const screenHeight = container.clientHeight;
        const screenWidth = container.clientWidth;

        // Correggi la posizione se necessario
        if (x + logoWidth > screenWidth) {
            x = screenWidth - logoWidth;
        }

        if (y + logoHeight > screenHeight) {
            y = screenHeight - logoHeight;
        }
    });

    // Avvia l'animazione
    window.requestAnimationFrame(animate);
});