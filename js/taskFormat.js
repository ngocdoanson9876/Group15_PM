document.addEventListener("DOMContentLoaded", function() {
    $('#saveRequestButton').on('click', function() {
        var taskName = $('#taskName').val();
        var toDoWorks = $('#toDoWorks').val().split('\n').map(function(work) {
            return work.trim();
        }).filter(function(work) {
            return work.length > 0;
        }).join('<hr>');
        var deadline = $('#deadline').val();
        var status = 'Not started'; // Mặc định trạng thái là "Not started"
        var statusHtml = `<div style="background-color: #FEE2E2; border-radius: 12px; padding: 4px; color: #991B1B;">${status}</div>`;

        var newRow = `
            <tr>
                <td>${taskName}</td>
                <td>${toDoWorks}</td>
                <td>${deadline}</td>
                <td class="status-column">${statusHtml}</td>
            </tr>
            <tr class="separator-row">
                <td colspan="4"><hr></td>
            </tr>
        `;

        $('#tableBody').append(newRow);
        $('#addRequestModal').modal('hide');
        $('#addRequestForm')[0].reset();
    });

    // Add separator rows for initial data
    $('#tableBody tr').each(function(index, row) {
        if (index < $('#tableBody tr').length - 1) {
            $('<tr class="separator-row"><td colspan="4"><hr></td></tr>').insertAfter(row);
        }
    });

    // Handle Cancel button
    $('#cancelAddButton').on('click', function() {
        $('#addRequestModal').modal('hide');
    });
});
