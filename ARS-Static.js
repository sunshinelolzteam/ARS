var arsStatic = {
  html: `<div class="asf-container">
    <div class="asf-header">
      <div class="asf-logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABsFBMVEVHcEz9/f3+/v8Tdaf///8LGTP+/v4NPWX+/v8GGDj8/f4OGzX///////////8ZJ1ALJ0oNGzf+/v4mOGXX2+T8/f3z9vkPH0UjMFj5+fr///8NGzMJG0ERHS8SKEgXW40Ubp8WY5Ula5ePnrb3+PlnhKUfQ3Q3R3C2vMvt8PRcZH7///8TgrMTgbITfa4YNmcPHDT///8JGj0HGT2rucxGWYJ0g6H///9aZYbGy9jFyNQhL1TO0dp5lbOTma39/f7///+Sl6br7O6SlqT///////8UY5UUY5UJGTgTc6QThLUTfa8VToETdKYQK1sRK1sUWowUY5X///+mq7tlc5MzWX7Mztl5gZuytcJPV3AjL08iLlEUTYAUPXATK10Tfa4FO3IVToHEz9wAL2fj5+5GUG4JFz1mbIC8wMsFFzYFGDwHGkILGTIJG0cLHUoFGD8RJFMUU4YUN2kOIE4TSHsUYJMUbqAUQnUVTYAQLWEUWowUPG8SKFoTZ5kRHDATfq8Tdqf///8IIFQUaJkeWYrA0N4JMmgHQndAc5wJTYIIVooGXpNllrdchanT3ui2xtaZV9eJAAAAaXRSTlMAj/j97/vmAtD8xzncwJvwJay59uHd/ObqgnBtlpgLPfz8Femx+/7s0vitXqVLf53k3VmE9fDr59vaxLSY/qmGRnxeXjI/lGy5MLbr+8A/cPuiqLzgfLHJhJfN17bjr6z8xfmu9cH4cHitMXlOAAACjUlEQVQ4y2XTh1faQBgA8IMGQqCiGPaQAgUE3OLeFTfurR120SYkAQSrQUABUSyOf7l3kQC+/i7JfXff9/Ly4DsAXuA4AG0qi02jsVlUbS/rRnCpsvXkqnpsKmGrnsZBy2KOyTGyHBrooWlpeAkMLAzDyBiRDIayvloFnKwMJSOoKgJGsghD9YsVOLASBEE3pKtz/8t34MBCEXQddbQ7O/trjKAiVB96BY630I2ow1BobjoUmjXQdAR+KRyL0Ug0VhWlD+c+jBkMxzNzM3BXgwrWog1oYyBgODr47adnpv2xSBT+HkDDRlgxz9H+wM/jgNkc8BvNBzGWtQLgNLAcy8JbGLFJs3HSZDJNmQzjpmaWM7SBviRXk2SbxyXGSQkCI1jAqUB/Mp6sYbfV6mGvWq2W7JOSPQ7urIPuJBsXccNbkNG7t7cf397aQQkrMLUPZLh4JoMushV5P0yS3vatUbSV+QwkytaRQbJQ4DOFwqiySQnBR1PTKAnTPCyY0ikUSoVrgPcOjihE2vYdPnPK8yTfDczytwKtbsQVhHOvTqcd4Hn+VMCvg2lM3itHMK3LMyiXD/UGPbeXkFBwuQacrh8Yhg1hiM8TxHxu/vT8UvQJtud3j/ubVKCXTrix8O15Xaob/hf21MlJOZiX5qXSvHvi+Tacqgmn7Kgfvl6E7+58ped8vpTyTdwlLkThi49CP9gTiZv7R/1juXxTerpPNEINA6/d9Eb6/kH/VNKXbtJ1G+kFsSk3zxyOv46Hh3KlclbjOJsHYleDzWKxmK1UskUkixSzxfnGc9f1DvkjQvHCq6OHL61eX1+/qYLR6tKrw4lKOr+sXFWtdNj/O99wiTs7uzqWlzu6Op14Pf0P2PD9NrHDeWsAAAAASUVORK5CYII=" alt="ASF Logo" />
        <h1>ArchiSteamFarm</h1>
      </div>
      <div class="asf-info">
        <span class="version-badge" id="asfVersion">ASF Команды</span>
      </div>
    </div>
    
    <div class="asf-search">
      <input type="text" id="commandSearch" placeholder="Поиск команд..." />
      <select id="permissionFilter">
        <option value="all">Все разрешения</option>
        <option value="Owner">Owner</option>
        <option value="Master">Master</option>
        <option value="Operator">Operator</option>
        <option value="FamilySharing">FamilySharing</option>
      </select>
    </div>

    <div class="asf-commands">
      <table class="sunshine">
        <thead>
          <tr>
            <th class="action-col">Действие</th>
            <th>Команда</th>
            <th>Разрешение</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>2fa &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Сгенерировать временный токен <strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-ru-RU">двухфакторной аутентификации</a></strong> для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>2fano &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Отклонить все ожидающие <strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-ru-RU">двухфакторной аутентификации</a></strong> подтверждения обмена для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>2faok &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Принять все ожидающие <strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-ru-RU">двухфакторной аутентификации</a></strong> подтверждения обмена для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Operator">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>addlicense &lt;Bots&gt; &lt;Licenses&gt;</code></td>
            <td><span class="permission-badge operator">Operator</span></td>
            <td>Активировать указанные <code>Licenses</code> для указанных ботов, объяснение параметра можно найти <strong><a href="#addlicense-команда-licenses-параметр">ниже</a></strong>.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>balance &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Показать баланс кошелька Steam для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>bgr &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Отобразить информацию об очереди <strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Background-games-redeemer-ru-RU">BGR</a></strong> (активатор игр в фоне) для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>bl &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Показать список пользователей в черном списке обмена для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>bladd &lt;Bots&gt; &lt;SteamIDs64&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Добавить указанные <code>SteamIDs</code> в черный список обмена для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>blrm &lt;Bots&gt; &lt;SteamIDs64&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Удалить указанные <code>SteamIDs</code> из черного списка обмена для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="Owner">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>exit</code></td>
            <td><span class="permission-badge owner">Owner</span></td>
            <td>Полностью остановить процесс ASF.</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>farm &lt;Bots&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Перезапустить модуль фарма карточек для указанных ботов.</td>
          </tr>
          <tr class="command-row" data-permission="FamilySharing">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>help</code></td>
            <td><span class="permission-badge familysharing">FamilySharing</span></td>
            <td>Показать справку (ссылку на эту страницу).</td>
          </tr>
          <tr class="command-row" data-permission="Master">
            <td><button class="asf-button">Использовать</button></td>
            <td><code>input &lt;Bots&gt; &lt;Type&gt; &lt;Value&gt;</code></td>
            <td><span class="permission-badge master">Master</span></td>
            <td>Установить указанное входное значение для указанных ботов, доступно только в режиме <code>Headless</code> — см. <strong><a href="#input-команда">пояснение ниже</a></strong>.</td>
          </tr>
          <!-- Остальные команды опущены для краткости -->
        </tbody>
      </table>
    </div>
    
    <div class="asf-footer">
      <p>ArchiSteamFarm © JustArchiNET</p>
      <a href="https://github.com/JustArchiNET/ArchiSteamFarm" target="_blank">GitHub</a> | 
      <a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki" target="_blank">Wiki</a>
    </div>
  </div>
  
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Поиск команд
    const searchInput = document.getElementById('commandSearch');
    const permissionFilter = document.getElementById('permissionFilter');
    const commandRows = document.querySelectorAll('.command-row');
    
    function filterCommands() {
      const searchTerm = searchInput.value.toLowerCase();
      const permissionValue = permissionFilter.value;
      
      commandRows.forEach(row => {
        const commandText = row.querySelector('code').textContent.toLowerCase();
        const description = row.querySelector('td:last-child').textContent.toLowerCase();
        const permission = row.getAttribute('data-permission');
        
        const matchesSearch = commandText.includes(searchTerm) || description.includes(searchTerm);
        const matchesPermission = permissionValue === 'all' || permission === permissionValue;
        
        row.style.display = matchesSearch && matchesPermission ? '' : 'none';
      });
    }
    
    searchInput.addEventListener('input', filterCommands);
    permissionFilter.addEventListener('change', filterCommands);
    
    // Анимация кнопок
    const buttons = document.querySelectorAll('.asf-button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 300);
      });
    });
  });
  </script>`,
  
  css: `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f0f2f5;
  }
  
  .asf-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .asf-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e4e8;
    margin-bottom: 20px;
  }
  
  .asf-logo {
    display: flex;
    align-items: center;
  }
  
  .asf-logo img {
    width: 48px;
    height: 48px;
    margin-right: 15px;
  }
  
  .asf-logo h1 {
    font-size: 24px;
    color: #171b1f;
    font-weight: 600;
  }
  
  .asf-info {
    display: flex;
    align-items: center;
  }
  
  .version-badge {
    background-color: #1a73e8;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
  }
  
  .asf-search {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
  }
  
  .asf-search input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 15px;
    transition: border-color 0.3s;
  }
  
  .asf-search input:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
  
  .asf-search select {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
  }
  
  table.sunshine {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-size: 14px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  table.sunshine th {
    background-color: #f5f7fa;
    color: #5f6368;
    font-weight: 600;
    text-align: left;
    padding: 15px;
    border-bottom: 2px solid #e1e4e8;
  }
  
  table.sunshine tr {
    border-bottom: 1px solid #e1e4e8;
    transition: background-color 0.2s;
  }
  
  table.sunshine tr:hover {
    background-color: #f6f8fa;
  }
  
  table.sunshine td {
    padding: 12px 15px;
    vertical-align: middle;
  }
  
  table.sunshine .action-col {
    width: 120px;
  }
  
  .asf-button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .asf-button:hover {
    background-color: #0d62d1;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .asf-button.clicked {
    transform: scale(0.95);
    background-color: #0d62d1;
  }
  
  code {
    background-color: #f1f3f4;
    padding: 3px 6px;
    border-radius: 3px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    color: #333;
  }
  
  .permission-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: white;
  }
  
  .permission-badge.owner {
    background-color: #e53935;
  }
  
  .permission-badge.master {
    background-color: #673ab7;
  }
  
  .permission-badge.operator {
    background-color: #2196f3;
  }
  
  .permission-badge.familysharing {
    background-color: #4caf50;
  }
  
  .asf-footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e1e4e8;
    display: flex;
    justify-content: space-between;
    color: #6e7781;
    font-size: 14px;
  }
  
  .asf-footer a {
    color: #1a73e8;
    text-decoration: none;
    margin-left: 10px;
  }
  
  .asf-footer a:hover {
    text-decoration: underline;
  }
  
  a {
    color: #1a73e8;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .asf-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .asf-info {
      margin-top: 10px;
    }
    
    .asf-search {
      flex-direction: column;
    }
    
    table.sunshine th:nth-child(3),
    table.sunshine td:nth-child(3) {
      display: none;
    }
  }
  `
}
