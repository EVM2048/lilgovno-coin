//var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
//var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//  return new bootstrap.Popover(popoverTriggerEl)
//})
//const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
//const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    
    const data = {
        labels: ['80% Public', '10% Team', '6% Partners', '4% Advisors'],
        datasets: [{
            data: [80, 10, 6, 4],
            backgroundColor: ['#1fd3fc', '#0df2a4', '#feb11e', '#9b6ffb'],
            hoverOffset: 8,
            borderWidth: 0.5,
            borderColor: '#0000',
            //pointStyle: 'rectRounded'
            
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            cutout: '65%',
            plugins: {
                legend: {
                    //textAlign: 'start',
                    position: 'top',
                    labels: {
                        color: '#ffffff',
                        usePointStyle: true,
                        //pointStyle: 'rectRounded'
                        pointStyle: 'circle',
                        //boxWidth: 10,
                        boxHeight: 15,
                        textAlign: 'left',
                        padding: 10,
                        font: {
                            family: "'Helvetica'",	
                            size: 16,
                           // weight: 'lighter',
                            style: 'normal'
                        }
                    }
                },
                /*datalabels:{
                    color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                    formatter: function(context) {
                        const value = context.raw || 0;
                        return '${value}' + '%';
                    }
                },   */
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const amount = 1000000000; // variable with the total amount
                            const tokenAmount = (value / 100) * amount;
                            const unit = 'tokens';
                            return `${tokenAmount.toLocaleString()} ${unit}`;

                            /*const value = context.raw;
                            const unit = context.dataset.unit;
                            return `${value.toLocaleString()} ${unit}`;*/
                            
                            //const label = context.label || '';
                            //const value = context.raw || 0;
                           //return `${label}: ${value}%`;
                        }
                    }
                },
                 
            }
        }
    };
    
    const distributionChart = new Chart(ctx, config);
    
    const copyButton = document.getElementById('copyButton');
    const popover = document.getElementById('my-popover');

    copyButton.addEventListener('click', () => {
        Copy('toCopy');
        showPopover();
    });

    function showPopover() {
        popover.style.display = 'block';
        setTimeout(() => {
            popover.style.display = 'none';
        }, 2000); 
    }
});

function Copy(containerid) {
    let textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(containerid).innerText;
    let selector = document.querySelector('#temp');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}