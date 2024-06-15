<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BudgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('budgets')->insert([
            [
                'title' => 'Budget1',
                'amount' => 100,
                'category' => 'Food'
            ],
            [
                'title' => 'Budget2',
                'amount' => 200,
                'category' => 'Food'
            ],
            [
                'title' => 'Budget3',
                'amount' => 300,
                'category' => 'Hobby'
            ],
            [
                'title' => 'Budget4',
                'amount' => 400,
                'category' => 'School'
            ],
            [
                'title' => 'Budget5',
                'amount' => 100,
                'category' => 'Living'
            ]
        ]);
    }
}
