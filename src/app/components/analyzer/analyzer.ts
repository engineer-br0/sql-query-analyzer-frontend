import { Component } from '@angular/core';
import { SqlService } from '../../services/sql-service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analyzer',
  imports: [JsonPipe, FormsModule, CommonModule],
  templateUrl: './analyzer.html',
  styleUrl: './analyzer.css',
})
export class AnalyzerComponent {

  query: string = "";
  result: any = null;

  constructor(private sqlService: SqlService) {}

  analyze() {

    this.sqlService.analyzeQuery(this.query)
      .subscribe(response => {
        this.result = response;
      });
  }
}