document.addEventListener('DOMContentLoaded', function() {
            const phaseHeaders = document.querySelectorAll('.phase-header');
            
            phaseHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const phase = this.parentElement;
                    phase.classList.toggle('active');
                });
            });
        });